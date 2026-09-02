package com.roms.exception;

/**
 * Thrown when an invalid operation is attempted
 * (e.g. invalid status transition, modifying a closed order).
 */
public class InvalidOperationException extends RuntimeException {
    public InvalidOperationException(String message) {
        super(message);
    }
}
