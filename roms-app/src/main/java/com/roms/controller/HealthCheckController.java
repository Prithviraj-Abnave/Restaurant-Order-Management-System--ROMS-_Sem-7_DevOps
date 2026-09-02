package com.roms.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Health check endpoint for DevOps pipeline verification.
 * Used by Jenkins, Docker, and Ansible to confirm the application is running.
 */
@RestController
@RequestMapping("/api/health")
@CrossOrigin(origins = "*")
public class HealthCheckController {

    @GetMapping
    public Map<String, String> healthCheck() {
        return Map.of("status", "UP");
    }
}
