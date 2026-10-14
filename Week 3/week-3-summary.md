# Week 3 — Requirements, Architecture and Technical Setup

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** August 2026

---

## 1. Objective
Design the system architecture, write the Software Requirements Specification (SRS), define the data model and REST API list, and set up the local development environment.

---

## 2. Software Requirements Specification (Summary)

### 2.1 System Perspective

ROMS is a **3-tier web application**:

```
Presentation Layer  →  HTML5 + CSS3 + Vanilla JS (browser)
Application Layer   →  Java 17 / Spring Boot 3.x (embedded Tomcat)
Data Layer          →  H2 In-Memory (dev) / MySQL 8 (prod)
```

### 2.2 Functional Requirements

| ID | Requirement | Feature |
|----|------------|---------|
| FR-01 | Add, edit, delete, list menu items with validation | F1 |
| FR-02 | Create order with table number + items; auto-calculate total; assign "PLACED" | F2 |
| FR-03 | Modify order (add/remove items) only when PLACED or PREPARING | F2 |
| FR-04 | Status lifecycle: PLACED → PREPARING → READY → SERVED → CLOSED (forward-only) | F3 |
| FR-05 | Search menu by name (partial); filter by category and availability | F4 |
| FR-06 | Filter orders by status and date range; search by order ID or table number | F4 |
| FR-07 | Alert on out-of-stock item in order | F5 |
| FR-08 | Alert when order stuck in PLACED/PREPARING > 30 minutes | F5 |
| FR-09 | Alert dashboard — view, resolve alerts | F5 |

### 2.3 Non-Functional Requirements

| ID | NFR | Target |
|----|-----|--------|
| NFR-01 | Performance | Pages load < 2 seconds on localhost |
| NFR-02 | Usability | Waiter can create order in < 30 seconds |
| NFR-03 | Reliability | No crash on invalid inputs (graceful error handling) |
| NFR-04 | Portability | Runs inside Docker without modification |
| NFR-05 | Maintainability | Layered architecture: Controller → Service → Repository |

---

## 3. System Architecture

```
┌─────────────────────────────────────┐
│         Browser (Client)            │
│  index.html | orders.html | alerts  │
└──────────────────┬──────────────────┘
                   │ HTTP / REST
┌──────────────────▼──────────────────┐
│      Spring Boot Application        │
│  Controllers → Services → Repos     │
│  Embedded Tomcat (port 8081)        │
└──────────────────┬──────────────────┘
                   │ JPA / Hibernate
┌──────────────────▼──────────────────┐
│        H2 In-Memory Database        │
│  (MySQL in production deployment)   │
└─────────────────────────────────────┘
```

---

## 4. Data Model

Four entities were designed:

### `menu_item`
| Column | Type | Notes |
|--------|------|-------|
| id | BIGINT PK | Auto-generated |
| name | VARCHAR | Required |
| category | ENUM | STARTER, MAIN_COURSE, DESSERT, BEVERAGE |
| price | DECIMAL | Must be > 0 |
| is_available | BOOLEAN | Default true |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### `order_table` *(named to avoid SQL reserved word)*
| Column | Type | Notes |
|--------|------|-------|
| id | BIGINT PK | Auto-generated |
| table_number | INT | |
| status | ENUM | PLACED→PREPARING→READY→SERVED→CLOSED |
| total_amount | DECIMAL | Calculated on create/update |
| created_at | TIMESTAMP | |
| updated_at | TIMESTAMP | |

### `order_item` *(join table)*
| Column | Type | Notes |
|--------|------|-------|
| id | BIGINT PK | |
| order_id | FK → order_table | |
| menu_item_id | FK → menu_item | |
| quantity | INT | ≥ 1 |
| price_at_order | DECIMAL | Snapshot of price at time of order |

### `alert`
| Column | Type | Notes |
|--------|------|-------|
| id | BIGINT PK | |
| type | ENUM | OUT_OF_STOCK, STALE_ORDER |
| message | VARCHAR | Human-readable description |
| order_id | FK (nullable) | |
| menu_item_id | FK (nullable) | |
| is_resolved | BOOLEAN | Default false |
| created_at | TIMESTAMP | |

**Relationships:**
```
menu_item  ──(1:N)──  order_item  ──(N:1)──  order_table
menu_item  ──(1:N)──  alert
order_table ──(1:N)── alert
```

---

## 5. REST API List

| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/menu` | Get all menu items (supports ?search, ?category, ?available) |
| POST | `/api/menu` | Add a new menu item |
| PUT | `/api/menu/{id}` | Update a menu item |
| DELETE | `/api/menu/{id}` | Soft-delete a menu item |
| GET | `/api/orders` | Get all orders (supports ?status, ?tableNumber, ?fromDate, ?toDate) |
| POST | `/api/orders` | Create a new order |
| PUT | `/api/orders/{id}` | Update an existing order's items |
| PATCH | `/api/orders/{id}/status` | Update order status (forward-only transitions) |
| GET | `/api/alerts` | Get all active (unresolved) alerts |
| PATCH | `/api/alerts/{id}/resolve` | Mark an alert as resolved |
| GET | `/actuator/health` | Health check endpoint for CI/CD and Ansible |

---

## 6. Local Development Setup

```bash
# Prerequisites
# Java 17+, Maven 3.9+, Git

# Clone repository
git clone https://github.com/Prithviraj-Abnave/Restaurant-Order-Management-System--ROMS-_Sem-7_DevOps.git
cd Restaurant-Order-Management-System--ROMS-_Sem-7_DevOps/roms-app

# Build and run locally
mvn spring-boot:run

# Application available at:
# http://localhost:8081
```

---

## 7. Deliverables

- ✅ SRS Summary — functional + non-functional requirements (`srs-summary.md`)
- ✅ Architecture diagram — 3-tier system diagram (`architecture diagram.png`)
- ✅ Use-case diagram — actors and system interactions (`use case diagram.png`)
- ✅ Data model — 4 entities with columns and relationships (`data-model.md`)
- ✅ REST API list — all 11 endpoints documented (`api-list.md`)
- ✅ Local setup confirmed — Spring Boot app starts on port 8081

---
*Document version: 1.0 | Created: August 2026 | Author: Prithviraj Abnave (23102B0035)*
