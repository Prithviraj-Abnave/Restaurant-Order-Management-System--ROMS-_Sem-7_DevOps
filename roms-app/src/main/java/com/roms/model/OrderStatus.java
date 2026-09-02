package com.roms.model;

/**
 * Represents the lifecycle status of a restaurant order.
 * Only forward transitions are allowed:
 * PLACED → PREPARING → READY → SERVED → CLOSED
 */
public enum OrderStatus {
    PLACED,
    PREPARING,
    READY,
    SERVED,
    CLOSED;

    /**
     * Checks whether a forward transition to the given status is valid.
     * E.g. PLACED can transition to PREPARING, but not to SERVED directly.
     */
    public boolean canTransitionTo(OrderStatus next) {
        return next.ordinal() == this.ordinal() + 1;
    }
}
