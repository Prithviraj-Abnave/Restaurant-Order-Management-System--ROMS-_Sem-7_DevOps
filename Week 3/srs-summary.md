# Software Requirements Specification (Summary) — Restaurant Order Management System

---

## 1. Introduction

### 1.1 Purpose

This document summarises the software requirements for the Restaurant Order Management System (ROMS). ROMS is a web-based application that allows restaurant staff to manage menu items, create and track dine-in orders, and receive alerts for operational exceptions.

### 1.2 Scope

ROMS is an MVP (Minimum Viable Product) built as part of the DevOps (SEM 7) curriculum. It covers 5 core features and serves as the application layer for demonstrating a full CI/CD pipeline using Git, Jenkins, Selenium, Docker, and Ansible.

### 1.3 Intended Audience

- Restaurant Owner / Manager
- Waiter / Front-of-House Staff
- Kitchen Staff / Chef

(The customer does not interact with the system directly.)

---

## 2. Overall Description

### 2.1 System Perspective

ROMS is a standalone 3-tier web application:
- **Presentation Layer** — HTML/CSS/JS pages served by the backend
- **Application Layer** — Java (Spring Boot) REST API running on embedded Tomcat
- **Data Layer** — MySQL 8 relational database

The system runs on a local network. There is no cloud deployment or public internet exposure in the MVP.

### 2.2 User Classes

- **Manager** — Full access: manages menu items, views all orders, handles alerts
- **Waiter** — Creates and updates orders, views order status, sees the menu
- **Kitchen Staff** — Views incoming orders, updates order status (Preparing → Ready)

Note: There is no authentication or login system in the MVP. All users access the same application but use different pages based on their role.

### 2.3 Operating Environment

- **Server**: Windows machine running Java 17+ and MySQL 8
- **Client**: Any modern web browser (Chrome, Firefox, Edge)
- **Deployment**: Locally via Spring Boot embedded Tomcat, or inside a Docker container

---

## 3. Functional Requirements

### FR-01: Menu Item Management (Feature F1)

- The system shall allow adding a new menu item with name, category, price, and availability status
- The system shall allow editing any field of an existing menu item
- The system shall allow deleting a menu item (soft delete)
- The system shall validate that name is not empty, price is greater than 0, and category is from the predefined list
- The system shall display all menu items in a list view

### FR-02: Order Creation and Modification (Feature F2)

- The system shall allow creating a new order with a table number and one or more items with quantities
- The system shall auto-calculate the order total (item price × quantity, summed)
- The system shall assign status "Placed" to newly created orders
- The system shall allow modifying an order only when its status is "Placed" or "Preparing"
- The system shall record creation and last-updated timestamps

### FR-03: Order Status Tracking (Feature F3)

- The system shall support the following status lifecycle: Placed → Preparing → Ready → Served → Closed
- The system shall enforce forward-only transitions (no going backward)
- The system shall record a timestamp for each status change
- The system shall display orders grouped by status on the kitchen display page
- The system shall use colour-coded badges to indicate current status

### FR-04: Search and Filter (Feature F4)

- The system shall allow searching menu items by name (partial match)
- The system shall allow filtering menu items by category and availability
- The system shall allow filtering orders by status and date range
- The system shall allow searching orders by order ID or table number
- The system shall show "No results found" when filters return empty

### FR-05: Exception Alerts (Feature F5)

- The system shall generate an alert when a waiter attempts to add an out-of-stock item to an order
- The system shall generate an alert when an order remains in "Placed" or "Preparing" for more than 30 minutes
- The system shall display all active alerts on an alert dashboard
- The system shall allow a manager to mark an alert as resolved

---

## 4. Non-Functional Requirements

### NFR-01: Performance
- Pages shall load within 2 seconds on localhost
- Search and filter results shall appear within 1 second

### NFR-02: Usability
- The UI shall be simple enough that a waiter can create an order in under 30 seconds
- The kitchen display shall be readable from a distance (large text, clear status badges)

### NFR-03: Reliability
- The application shall not crash on invalid inputs (graceful error handling)
- The application shall maintain data integrity (no orphaned orders or items)

### NFR-04: Portability
- The application shall run inside a Docker container without modification
- The application shall work on any machine with Java 17+ and MySQL 8

### NFR-05: Maintainability
- The codebase shall follow a layered architecture (Controller → Service → Repository)
- The code shall use meaningful names and include comments for complex logic

---

## 5. External Interface Requirements

### 5.1 User Interfaces
- Menu Management page (Manager)
- Order Creation page (Waiter)
- Kitchen Display page (Kitchen Staff)
- Order List / Search page (Manager)
- Alert Dashboard page (Manager)

### 5.2 Software Interfaces
- Java 17+ (Spring Boot 3.x)
- MySQL 8 (via Spring Data JPA / Hibernate)
- Maven 3.9+ (build tool)
- Docker (containerization)

### 5.3 Communication Interfaces
- HTTP/REST over localhost (port 8080)
- JDBC connection to MySQL (port 3306)

---

*Document version: 1.0 | Created: August 2026 | Author: Prithviraj Abnave (23102B0035)*
