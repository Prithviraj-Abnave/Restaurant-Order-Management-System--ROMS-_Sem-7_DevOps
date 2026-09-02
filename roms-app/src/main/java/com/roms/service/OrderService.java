package com.roms.service;

import com.roms.model.*;
import com.roms.repository.MenuItemRepository;
import com.roms.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private MenuItemRepository menuItemRepository;

    /**
     * Get all orders, optionally filtered by status, table number, or date range.
     */
    public List<Order> getOrders(String status, Integer tableNumber,
                                  LocalDate fromDate, LocalDate toDate) {
        if (status != null && !status.isEmpty()) {
            return orderRepository.findByStatus(OrderStatus.valueOf(status));
        }
        if (tableNumber != null) {
            return orderRepository.findByTableNumber(tableNumber);
        }
        if (fromDate != null && toDate != null) {
            return orderRepository.findByCreatedAtBetween(
                    fromDate.atStartOfDay(), toDate.plusDays(1).atStartOfDay());
        }
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    /**
     * Create a new order with the given table number and list of items.
     * Each item entry is a Map with "menuItemId" and "quantity".
     * Validates that each menu item exists and is available.
     */
    public Order createOrder(Integer tableNumber, List<Map<String, Object>> itemRequests) {
        Order order = new Order();
        order.setTableNumber(tableNumber);
        order.setStatus(OrderStatus.PLACED);

        BigDecimal total = BigDecimal.ZERO;

        for (Map<String, Object> req : itemRequests) {
            Long menuItemId = Long.valueOf(req.get("menuItemId").toString());
            Integer quantity = Integer.valueOf(req.get("quantity").toString());

            MenuItem menuItem = menuItemRepository.findById(menuItemId)
                    .orElseThrow(() -> new RuntimeException("Menu item not found: " + menuItemId));

            if (!menuItem.isAvailable()) {
                throw new RuntimeException("Menu item is not available: " + menuItem.getName());
            }

            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setMenuItem(menuItem);
            orderItem.setQuantity(quantity);
            orderItem.setPriceAtOrder(menuItem.getPrice());

            order.getItems().add(orderItem);
            total = total.add(menuItem.getPrice().multiply(BigDecimal.valueOf(quantity)));
        }

        order.setTotalAmount(total);
        return orderRepository.save(order);
    }

    /**
     * Update an existing order's items. Only allowed when status is PLACED or PREPARING.
     */
    public Order updateOrder(Long id, List<Map<String, Object>> itemRequests) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found: " + id));

        if (order.getStatus() != OrderStatus.PLACED && order.getStatus() != OrderStatus.PREPARING) {
            throw new RuntimeException("Order cannot be modified in status: " + order.getStatus());
        }

        // Clear existing items and rebuild
        order.getItems().clear();
        BigDecimal total = BigDecimal.ZERO;

        for (Map<String, Object> req : itemRequests) {
            Long menuItemId = Long.valueOf(req.get("menuItemId").toString());
            Integer quantity = Integer.valueOf(req.get("quantity").toString());

            MenuItem menuItem = menuItemRepository.findById(menuItemId)
                    .orElseThrow(() -> new RuntimeException("Menu item not found: " + menuItemId));

            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setMenuItem(menuItem);
            orderItem.setQuantity(quantity);
            orderItem.setPriceAtOrder(menuItem.getPrice());

            order.getItems().add(orderItem);
            total = total.add(menuItem.getPrice().multiply(BigDecimal.valueOf(quantity)));
        }

        order.setTotalAmount(total);
        order.setUpdatedAt(LocalDateTime.now());
        return orderRepository.save(order);
    }

    /**
     * Update the status of an order. Only forward transitions are allowed.
     */
    public Order updateOrderStatus(Long id, String newStatus) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found: " + id));

        OrderStatus target = OrderStatus.valueOf(newStatus);

        if (!order.getStatus().canTransitionTo(target)) {
            throw new RuntimeException(
                    "Invalid transition: " + order.getStatus() + " → " + target);
        }

        order.setStatus(target);
        order.setUpdatedAt(LocalDateTime.now());
        return orderRepository.save(order);
    }
}
