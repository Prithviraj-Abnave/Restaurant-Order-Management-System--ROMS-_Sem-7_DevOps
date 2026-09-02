package com.roms.controller;

import com.roms.model.Alert;
import com.roms.service.AlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/alerts")
@CrossOrigin(origins = "*")
public class AlertController {

    @Autowired
    private AlertService service;

    @GetMapping
    public List<Alert> getActiveAlerts() {
        return service.getActiveAlerts();
    }

    @GetMapping("/all")
    public List<Alert> getAllAlerts() {
        return service.getAllAlerts();
    }

    @GetMapping("/count")
    public Map<String, Long> getAlertCount() {
        return Map.of("count", service.getActiveAlertCount());
    }

    @PatchMapping("/{id}/resolve")
    public ResponseEntity<Alert> resolve(@PathVariable Long id) {
        return service.resolveAlert(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
