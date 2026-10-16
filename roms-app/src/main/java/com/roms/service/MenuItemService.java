package com.roms.service;

import com.roms.model.AlertType;
import com.roms.model.MenuItem;
import com.roms.repository.AlertRepository;
import com.roms.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MenuItemService {

    @Autowired
    private MenuItemRepository repository;

    @Autowired
    private AlertRepository alertRepository;

    @Autowired
    private AlertService alertService;

    public List<MenuItem> getAllItems() {
        return repository.findAll();
    }

    public List<MenuItem> getItemsByCategory(String category) {
        return repository.findByCategory(category);
    }

    public List<MenuItem> searchItemsByName(String name) {
        return repository.findByNameContainingIgnoreCase(name);
    }

    public Optional<MenuItem> getItemById(Long id) {
        return repository.findById(id);
    }

    public MenuItem saveItem(MenuItem item) {
        item.setUpdatedAt(LocalDateTime.now());

        // Check previous state (only relevant for updates, i.e. when id is set)
        if (item.getId() != null) {
            repository.findById(item.getId()).ifPresent(existing -> {
                boolean wasAvailable = existing.isAvailable();
                boolean isNowUnavailable = !item.isAvailable();

                if (wasAvailable && isNowUnavailable) {
                    // Item just went out of stock — create an alert (avoid duplicates)
                    boolean alreadyAlerted = alertRepository
                            .findByIsResolvedFalseOrderByCreatedAtDesc()
                            .stream()
                            .anyMatch(a -> a.getType() == AlertType.OUT_OF_STOCK
                                    && item.getId().equals(a.getMenuItemId()));

                    if (!alreadyAlerted) {
                        alertService.createAlert(
                                AlertType.OUT_OF_STOCK,
                                "\"" + item.getName() + "\" is now out of stock.",
                                null,
                                item.getId()
                        );
                    }
                } else if (!wasAvailable && !isNowUnavailable) {
                    // Item is back in stock — auto-resolve any open OOS alert for it
                    alertRepository.findByIsResolvedFalseOrderByCreatedAtDesc()
                            .stream()
                            .filter(a -> a.getType() == AlertType.OUT_OF_STOCK
                                    && item.getId().equals(a.getMenuItemId()))
                            .forEach(a -> alertService.resolveAlert(a.getId()));
                }
            });
        }

        return repository.save(item);
    }

    public void softDeleteItem(Long id) {
        repository.findById(id).ifPresent(item -> {
            item.setAvailable(false);
            item.setUpdatedAt(LocalDateTime.now());
            repository.save(item);
        });
    }
}
