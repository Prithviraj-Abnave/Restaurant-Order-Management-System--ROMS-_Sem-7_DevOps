package com.roms.repository;

import com.roms.model.Order;
import com.roms.model.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByStatus(OrderStatus status);
    List<Order> findByTableNumber(Integer tableNumber);
    List<Order> findByCreatedAtBetween(LocalDateTime from, LocalDateTime to);
}
