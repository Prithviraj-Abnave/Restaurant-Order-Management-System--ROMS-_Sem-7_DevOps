package com.roms.service;

import com.roms.model.Alert;
import com.roms.model.AlertType;
import com.roms.repository.AlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlertService {

    @Autowired
    private AlertRepository alertRepository;

    /**
     * Get all active (unresolved) alerts, newest first.
     */
    public List<Alert> getActiveAlerts() {
        return alertRepository.findByIsResolvedFalseOrderByCreatedAtDesc();
    }

    /**
     * Get count of unresolved alerts.
     */
    public long getActiveAlertCount() {
        return alertRepository.countByIsResolvedFalse();
    }

    /**
     * Get all alerts (resolved and unresolved).
     */
    public List<Alert> getAllAlerts() {
        return alertRepository.findAll();
    }

    /**
     * Create a new alert.
     */
    public Alert createAlert(AlertType type, String message, Long orderId, Long menuItemId) {
        Alert alert = new Alert(type, message, orderId, menuItemId);
        return alertRepository.save(alert);
    }

    /**
     * Mark an alert as resolved.
     */
    public Optional<Alert> resolveAlert(Long id) {
        return alertRepository.findById(id).map(alert -> {
            alert.setResolved(true);
            return alertRepository.save(alert);
        });
    }
}
