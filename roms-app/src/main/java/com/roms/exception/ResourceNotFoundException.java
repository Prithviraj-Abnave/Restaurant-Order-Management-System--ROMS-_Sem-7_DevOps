package com.roms.exception;

/**
 * Thrown when a requested resource (order, menu item, alert) is not found.
 */
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
