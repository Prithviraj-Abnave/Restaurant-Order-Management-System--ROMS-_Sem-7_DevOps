package com.roms.controller;

import com.roms.model.MenuItem;
import com.roms.service.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu-items")
@CrossOrigin(origins = "*") // Allows our frontend to fetch without CORS issues during development
public class MenuItemController {

    @Autowired
    private MenuItemService service;

    @GetMapping
    public List<MenuItem> getAll(@RequestParam(required = false) String search, 
                                 @RequestParam(required = false) String category) {
        if (search != null && !search.isEmpty()) {
            return service.searchItemsByName(search);
        } else if (category != null && !category.isEmpty()) {
            return service.getItemsByCategory(category);
        }
        return service.getAllItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<MenuItem> getById(@PathVariable Long id) {
        return service.getItemById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<MenuItem> create(@RequestBody MenuItem item) {
        return new ResponseEntity<>(service.saveItem(item), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MenuItem> update(@PathVariable Long id, @RequestBody MenuItem item) {
        if (service.getItemById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        item.setId(id);
        return ResponseEntity.ok(service.saveItem(item));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (service.getItemById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        service.softDeleteItem(id);
        return ResponseEntity.noContent().build();
    }
}
