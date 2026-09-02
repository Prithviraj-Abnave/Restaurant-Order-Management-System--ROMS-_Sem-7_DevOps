package com.roms.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

/**
 * Stores system-generated alerts for operational exceptions
 * such as out-of-stock items or orders that have been pending too long.
 */
@Entity
@Table(name = "alert")
public class Alert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private AlertType type;

    private String message;

    @Column(name = "order_id")
    private Long orderId;

    @Column(name = "menu_item_id")
    private Long menuItemId;

    private boolean isResolved = false;

    private LocalDateTime createdAt = LocalDateTime.now();

    // Default constructor required by JPA
    public Alert() {}

    // Convenience constructor
    public Alert(AlertType type, String message, Long orderId, Long menuItemId) {
        this.type = type;
        this.message = message;
        this.orderId = orderId;
        this.menuItemId = menuItemId;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public AlertType getType() { return type; }
    public void setType(AlertType type) { this.type = type; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public Long getOrderId() { return orderId; }
    public void setOrderId(Long orderId) { this.orderId = orderId; }

    public Long getMenuItemId() { return menuItemId; }
    public void setMenuItemId(Long menuItemId) { this.menuItemId = menuItemId; }

    public boolean isResolved() { return isResolved; }
    public void setResolved(boolean resolved) { isResolved = resolved; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
