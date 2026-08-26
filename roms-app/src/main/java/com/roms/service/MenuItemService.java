package com.roms.service;

import com.roms.model.MenuItem;
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
