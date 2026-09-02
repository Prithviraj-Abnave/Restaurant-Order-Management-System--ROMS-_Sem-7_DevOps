# Week 6 — MVP Completion and Git Collaboration

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** September 2026

---

## 1. MVP Features Implemented

### Feature 1: Order Management (`feature/order-management`)

| Component | File | Description |
|---|---|---|
| Model | `OrderStatus.java` | Enum: PLACED → PREPARING → READY → SERVED → CLOSED with `canTransitionTo()` |
| Model | `Order.java` | Entity mapped to `order_table`, OneToMany cascade to OrderItem |
| Model | `OrderItem.java` | Entity with ManyToOne to Order and MenuItem, stores `priceAtOrder` |
| Repository | `OrderRepository.java` | Queries: findByStatus, findByTableNumber, findByCreatedAtBetween |
| Repository | `OrderItemRepository.java` | Basic CRUD |
| Service | `OrderService.java` | createOrder (validates availability), updateOrder (PLACED/PREPARING only), updateOrderStatus (forward-only) |
| Controller | `OrderController.java` | GET /api/orders, POST /api/orders, PUT /api/orders/{id}, PATCH /api/orders/{id}/status |
| Frontend | `orders.html`, `orders.js` | Order table, status filter pills, create order modal |

### Feature 2: Alerts & Exception Handling (`feature/alerts-and-exceptions`)

| Component | File | Description |
|---|---|---|
| Model | `AlertType.java` | Enum: OUT_OF_STOCK, STALE_ORDER |
| Model | `Alert.java` | Entity with type, message, nullable FKs, resolved flag |
| Repository | `AlertRepository.java` | findByIsResolvedFalse, countByIsResolvedFalse |
| Service | `AlertService.java` | createAlert, getActiveAlerts, resolveAlert |
| Controller | `AlertController.java` | GET /api/alerts, PATCH /api/alerts/{id}/resolve |
| Controller | `HealthCheckController.java` | GET /api/health → {"status": "UP"} |
| Exception | `GlobalExceptionHandler.java` | Consistent JSON error responses |
| Exception | `ResourceNotFoundException.java` | 404 Not Found |
| Exception | `InvalidOperationException.java` | 400 Bad Request |
| Frontend | `alerts.html`, `alerts.js` | Alert dashboard with resolve buttons |

### Theme Migration

- Adopted **Light Academic Theme** from the Advance ML project
- **Layout**: Migrated from sidebar to sticky top navbar
- **Fonts**: Inter (body), Playfair Display (headings), JetBrains Mono (data)
- **Colors**: Warm white `#f8f8f6`, navy `#1e293b`, amber `#d97706`
- **Components**: Stat cards, pill badges, status badges, fade-in animations, custom scrollbar

---

## 2. Git Collaboration Evidence

### Branches Used

| Branch | Purpose | Status |
|---|---|---|
| `main` | Production releases | ✅ Updated with v1.0.0-mvp |
| `develop` | Integration branch | ✅ All features merged |
| `feature/item-catalogue` | Week 5 — Menu catalogue | ✅ Merged into develop |
| `feature/order-management` | Week 6 — Orders | ✅ Merged into develop |
| `feature/alerts-and-exceptions` | Week 6 — Alerts & exceptions | ✅ Merged (with conflict resolution) |

### Merge Conflict & Resolution

**Conflict file**: `roms-app/src/main/resources/static/index.html`

**What happened:**
- On `develop`: Changed brand subtitle to `"Restaurant Orders · v1.0"`
- On `feature/alerts-and-exceptions`: Changed brand subtitle to `"Order Management System"`
- Both modified the same line → CONFLICT

**Resolution**: Combined both changes into `"Order Management System · v1.0"`

**Commit**: `merge: resolve conflict — combine brand subtitle from both branches`

### Tagged Version

- **Tag**: `v1.0.0-mvp`
- **Message**: "Release v1.0.0-mvp: Functional MVP with menu catalogue, order management, alerts, and exception handling"

### Git Log (Graph)

```
*   merge: release v1.0.0-mvp — complete MVP into main
|\  
| *   merge: resolve conflict — combine brand subtitle from both branches
| |\  
| | * feat(alerts): implement alerts, health check, global exception handling
| * | chore(ui): add version label to navbar brand
| |/  
| *   merge: integrate order management feature into develop
| |\  
| | * feat(orders): implement order management and theme migration
| |/  
| * merge: integrate feature/item-catalogue into develop
|/| 
| * feat(menu): implement item catalogue MVP feature
|/  
* feat(week-4): Spring Boot skeleton
* docs(week-3): SRS, Data Model, API List, Diagrams
* docs(week-2): Backlog, Sprint Plan, DoD, DevOps Lifecycle
* docs(week-1): Problem Statement, Stakeholders, MVP Scope
```

---

## 3. Build Verification

```
> mvn clean compile -q
BUILD SUCCESS (0 errors)
```

---

## 4. Updated Backlog

| Feature | Status |
|---|---|
| ✅ Item Catalogue (CRUD, search, filter) | Done (Week 5) |
| ✅ Create/Update Transactions (Orders) | Done (Week 6) |
| ✅ Order Status Tracking (lifecycle) | Done (Week 6) |
| ✅ Search/Filter (menu + orders) | Done (Week 5–6) |
| ✅ Exception Alerts (OOS, stale) | Done (Week 6) |
| ✅ Health Check Endpoint | Done (Week 6) |
| ✅ Global Exception Handling | Done (Week 6) |
| ✅ Theme Migration (Light Academic) | Done (Week 6) |
| 🔲 Jenkins CI Job | Week 7 |
| 🔲 Jenkinsfile Pipeline | Week 8 |
| 🔲 Selenium Tests | Week 9–10 |
| 🔲 Dockerfile + Docker Compose | Week 11–12 |
| 🔲 Ansible Provisioning | Week 13–14 |

---

*Document version: 1.0 | Created: September 2026 | Author: Prithviraj Abnave (23102B0035)*
