# ROMS DevOps Project — Complete Weekly Lab Report (Weeks 1–15)

**Student:** Prithviraj Abnave (23102B0035)
**Subject:** DevOps — SEM 7
**Project:** Restaurant Order Management System (ROMS)
**Date:** August – October 2026

---

> This document is the complete combined weekly lab record for the ROMS DevOps project,
> covering all 15 weeks from initial problem definition through to the final end-to-end
> release and viva. Each section corresponds to one weekly sprint deliverable.

---


---

# Week 1 — Problem Definition and Project Scope

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** August 2026

---

## 1. Objective
Define the problem being solved, identify project stakeholders, establish the project objectives and constraints, and freeze the MVP scope for the 15-week DevOps project.

---

## 2. Problem Statement

Small-to-mid-sized Indian restaurants rely on **manual, paper-based workflows** for order taking, status tracking, and menu management. This leads to:

| Problem | Impact |
|---------|--------|
| Order mis-communication via handwritten chits | Wrong dishes, customer complaints |
| No real-time order status visibility | Waiters physically walk to kitchen |
| Stock / availability blind spots | Out-of-stock discovered only after ordering |
| Slow paper-based search and reporting | Manual ledger review required |
| No exception handling for stale orders | Problems unnoticed until customer escalates |
| Verbal menu updates | Inconsistent pricing shown to customers |

**Formal Problem Statement:**
> There is no affordable, lightweight, open-source web application that enables small-to-mid-sized restaurants to digitally manage their menu catalogue, create and update dine-in orders in real time, track order status from placement to serving, search and filter historical orders, and receive proactive alerts for operational exceptions — all deployed through a modern DevOps pipeline.

---

## 3. Stakeholders

| Stakeholder | Role | Primary Need |
|-------------|------|-------------|
| Restaurant Owner / Manager | Business admin | Menu management, order oversight, alerts, reporting |
| Waiter / Front-of-House Staff | Order entry | Quick order creation, status visibility |
| Kitchen Staff / Chef | Order fulfilment | Incoming orders, status update capability |
| DevOps Engineer (Student) | System delivery | Build, test, deploy via CI/CD |

---

## 4. Project Objectives

**Primary Objectives:**
- O1 — Build a functional ROMS web application (5 core MVP features)
- O2 — Implement a complete CI/CD pipeline (Git → Jenkins → Docker → Ansible)
- O3 — Demonstrate Git branching, PRs, conflict resolution, and tagging
- O4 — Automate build/test/deploy using Jenkins Pipeline as Code
- O5 — Integrate Selenium WebDriver tests as a quality gate
- O6 — Containerise the application with Docker
- O7 — Automate server provisioning with Ansible

**Secondary Objectives:**
- O8 — Produce comprehensive technical documentation
- O9 — Demonstrate idempotency and rollback/recovery
- O10 — Follow Agile methodology (backlog, sprint plan, Definition of Done)

---

## 5. MVP Scope (Frozen)

Five features were identified and frozen for the MVP:

| Feature | Name | Priority |
|---------|------|----------|
| F1 | Item Catalogue Management | Must Have |
| F2 | Create / Update Order | Must Have |
| F3 | Order Status Tracking | Must Have |
| F4 | Search and Filter | Should Have |
| F5 | Exception Alerts | Should Have |

**Explicitly Out of Scope:** Payment processing, customer QR-code ordering, multi-restaurant support, analytics dashboards, user authentication, mobile native app, email/SMS notifications.

---

## 6. Technology Stack (Confirmed)

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5 + CSS3 + Vanilla JavaScript |
| Backend | Java 17 + Spring Boot 3.x |
| Database | H2 (dev/test), MySQL 8 (prod) |
| Build | Maven 3.9+ |
| CI/CD | Jenkins LTS |
| Testing | Selenium WebDriver 4.x |
| Containerisation | Docker |
| Config Management | Ansible |
| Version Control | Git + GitHub |

---

## 7. Constraints and Risks

- **Team size:** Solo developer
- **Budget:** ₹0 (all open-source tools)
- **Timeline:** 15 fixed weeks
- **Key risks:** Machine resource exhaustion, Selenium flakiness, Week 15 documentation crunch

---

## 8. Deliverables

- ✅ Problem statement document (`problem-statement.md`)
- ✅ Stakeholder analysis (`stakeholders.md`)
- ✅ Objectives, constraints, and success criteria (`objectives-constraints.md`)
- ✅ MVP scope document (frozen) (`mvp-scope.md`)

---
*Document version: 1.0 | Created: August 2026 | Author: Prithviraj Abnave (23102B0035)*


---

# Week 2 — Agile Planning and DevOps Workflow Design

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** August 2026

---

## 1. Objective
Create the product backlog with user stories, define the sprint plan mapping features to weekly sprints, establish the Definition of Done checklist, and design the DevOps lifecycle workflow diagram.

---

## 2. Product Backlog

Eleven user stories were identified and prioritised using MoSCoW:

| ID | User Story | Feature | Priority | Sprint |
|----|-----------|---------|----------|--------|
| US-01 | Add / Edit / Delete Menu Items | F1 | Must Have | Week 5 |
| US-02 | View Menu Catalogue | F1 | Must Have | Week 5 |
| US-03 | Create a New Order | F2 | Must Have | Week 6 |
| US-04 | Update an Existing Order | F2 | Must Have | Week 6 |
| US-05 | Update Order Status | F3 | Must Have | Week 6 |
| US-06 | View Orders by Status (Kitchen Display) | F3 | Must Have | Week 6 |
| US-07 | Search Menu Items | F4 | Should Have | Week 6 |
| US-08 | Filter and Search Orders | F4 | Should Have | Week 6 |
| US-09 | Out-of-Stock Alert | F5 | Should Have | Week 6 |
| US-10 | Stale Order Alert | F5 | Should Have | Week 6 |
| US-11 | Alert Dashboard | F5 | Should Have | Week 6 |

**Backlog summary:** 11 total user stories | 6 Must Have | 5 Should Have

---

## 3. Sprint Plan

| Sprint (Week) | Phase | Goal |
|---------------|-------|------|
| Week 1 | Planning | Problem definition, MVP scope freeze |
| Week 2 | Planning | Backlog, sprint plan, Definition of Done |
| Week 3 | Planning | SRS, architecture, data model, API design |
| Week 4 | Dev Setup | Git/GitHub repository, Spring Boot skeleton |
| Week 5 | Feature Dev | F1: Item Catalogue (feature branch + PR) |
| Week 6 | Feature Dev | F2–F5: Orders, Status, Search, Alerts + merge conflict |
| Week 7 | CI/CD | Jenkins installation, freestyle build job |
| Week 8 | CI/CD | Jenkinsfile multi-stage pipeline + deployment |
| Week 9 | Testing | Selenium test design and local execution |
| Week 10 | Testing | Selenium integrated into Jenkins (quality gate) |
| Week 11 | Container | Dockerfile, container lifecycle |
| Week 12 | Container | Jenkins-Docker continuous deployment |
| Week 13 | Config Mgmt | Ansible inventory + configure-node playbook |
| Week 14 | Reliability | Provisioning, idempotency, health check, rollback |
| Week 15 | Release | End-to-end pipeline, final docs, viva |

---

## 4. Definition of Done

A user story / sprint is considered **Done** only when all of the following are satisfied:

**Code Level:**
- Compiles without errors; follows naming conventions; no hardcoded values; committed with a meaningful message (`type(scope): subject`)

**Testing Level:**
- Unit tests written; `mvn test` returns BUILD SUCCESS; manual browser testing confirms acceptance criteria

**Integration Level:**
- Feature branch merged to `develop` via Pull Request; no remaining merge conflicts

**Documentation Level:**
- New API endpoints documented; README updated; weekly deliverable docs completed

**DevOps Level (from Week 7 onward):**
- Jenkins pipeline green; Selenium tests pass; Docker image builds; Ansible playbook succeeds

**Deployment Level:**
- Application accessible at `http://localhost:8081`; no regressions in existing features

**Quick Check:** Does it work? Is it tested? Is it committed? Is it merged? Is it documented? Is it deployable? → If yes to all: **Done**.

---

## 5. DevOps Lifecycle Diagram

```
Plan → Code → Build → Test → Release → Deploy → Operate → Monitor
  │       │       │       │        │        │        │        │
Week    Week    Week    Week    Week    Week    Week    Week
1-3    4-6     7-8     9-10    11-12   11-12   13-14   15
```

Tools per phase:
- **Plan:** GitHub Issues, Sprint Plan
- **Code:** VS Code, Git, GitHub (PRs, branches)
- **Build:** Maven (`mvn clean package`)
- **Test:** JUnit 5, Selenium WebDriver
- **Release:** Jenkins Pipeline, Docker Hub tags
- **Deploy:** Docker (`docker run`), Jenkins Deploy stage
- **Operate:** Ansible (systemd service, provisioning)
- **Monitor:** `/actuator/health`, Exception Alerts dashboard

---

## 6. Deliverables

- ✅ Product backlog with 11 user stories (`product-backlog.md`)
- ✅ Sprint plan mapping all 15 weeks (`sprint-plan.md`)
- ✅ Definition of Done checklist (`definition-of-done.md`)
- ✅ DevOps lifecycle workflow diagram (documented above)

---
*Document version: 1.0 | Created: August 2026 | Author: Prithviraj Abnave (23102B0035)*


---

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


---

# Week 4 — Git and GitHub Repository Setup

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** August 2026

---

## 1. Objective
Create the GitHub repository with proper structure, branch protection policies, issue templates, and PR templates. Commit the Spring Boot application skeleton and establish the Git branching and commit-message conventions for the project.

---

## 2. Repository Setup

**Repository name:** `Restaurant-Order-Management-System--ROMS-_Sem-7_DevOps`  
**Visibility:** Public  
**URL:** `https://github.com/Prithviraj-Abnave/Restaurant-Order-Management-System--ROMS-_Sem-7_DevOps`

### Initial files committed:
| File | Purpose |
|------|---------|
| `README.md` | Project overview, setup instructions, tech stack |
| `.gitignore` | Excludes `target/`, `.idea/`, `*.class`, `*.log` |
| `roms-app/pom.xml` | Maven project descriptor (Spring Boot parent) |
| `roms-app/src/main/java/com/roms/RomsApplication.java` | Spring Boot main class |
| `roms-app/src/main/resources/application.properties` | H2 in-memory DB config, port 8081 |
| `Week 1/` – `Week 3/` | Documentation artifacts |

---

## 3. Branching Strategy

A **Gitflow-inspired** strategy was adopted:

```
main        ─── Production releases only (tagged with version)
 └── develop ─── Integration branch (all features merged here)
       └── feature/*   ─── One branch per feature (e.g. feature/item-catalogue)
       └── bugfix/*    ─── Bug fixes (e.g. bugfix/order-total-calculation)
       └── release/*   ─── Release preparation (e.g. release/1.0.0)
```

**Branch naming convention:**
- `feature/<kebab-case-name>` — e.g. `feature/item-catalogue`
- `bugfix/<description>` — e.g. `bugfix/fix-stale-order-alert`
- `release/<version>` — e.g. `release/1.0.0`

---

## 4. Commit Message Convention

Conventional Commits format adopted:
```
type(scope): subject

Examples:
feat(menu):    implement MenuItem entity and REST controller
fix(orders):   correct total recalculation on item removal
docs(week-4):  add Git repository setup documentation
chore(ci):     add Jenkinsfile multi-stage pipeline
test(selenium): add homepage title assertion
```

**Types:** `feat`, `fix`, `docs`, `chore`, `test`, `refactor`, `style`

---

## 5. GitHub Issues Created

Six issues were opened for the MVP features:

| Issue # | Title | Label | Milestone |
|---------|-------|-------|-----------|
| #1 | Implement Item Catalogue (F1) | `feature`, `must-have` | MVP v1.0 |
| #2 | Implement Order Management (F2) | `feature`, `must-have` | MVP v1.0 |
| #3 | Implement Order Status Tracking (F3) | `feature`, `must-have` | MVP v1.0 |
| #4 | Implement Search and Filter (F4) | `feature`, `should-have` | MVP v1.0 |
| #5 | Implement Exception Alerts (F5) | `feature`, `should-have` | MVP v1.0 |
| #6 | Set up Jenkins CI/CD Pipeline | `devops` | Pipeline |

---

## 6. Application Skeleton Committed

The Spring Boot skeleton was generated using Spring Initializr and committed to the repository:

```
roms-app/
├── pom.xml                              # Spring Boot 3.3.2, Java 17
├── src/main/java/com/roms/
│   ├── RomsApplication.java             # @SpringBootApplication entry point
│   ├── controller/                      # (empty — populated Week 5-6)
│   ├── service/                         # (empty — populated Week 5-6)
│   ├── repository/                      # (empty — populated Week 5-6)
│   └── model/                           # (empty — populated Week 5-6)
└── src/main/resources/
    ├── application.properties           # H2 in-memory, port 8081
    └── static/                          # (empty — populated Week 5-6)
```

**Verification — application starts:**
```
mvn spring-boot:run
...
Started RomsApplication in 2.1 seconds
Tomcat started on port 8081
```

---

## 7. Git Log After Week 4

```
* docs(week-4): add Git/GitHub setup documentation
* chore(week-4): commit Spring Boot application skeleton
* docs(week-3): SRS, Data Model, API List, Architecture diagrams
* docs(week-2): Product Backlog, Sprint Plan, Definition of Done
* docs(week-1): Problem Statement, Stakeholders, MVP Scope, Objectives
* Initial commit: README and .gitignore
```

---

## 8. Deliverables

- ✅ GitHub repository created with README, .gitignore, issue templates
- ✅ Branch naming convention and commit message format established
- ✅ Spring Boot application skeleton committed and verified
- ✅ GitHub Issues #1–#6 created for all MVP features
- ✅ `develop` branch created from `main`

---
*Document version: 1.0 | Created: August 2026 | Author: Prithviraj Abnave (23102B0035)*


---

# Week 5 — Feature F1: Item Catalogue (Feature Branch Workflow)

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** September 2026

---

## 1. Objective
Implement the complete Item Catalogue feature (F1) using the Git feature branch workflow. Create the MenuItem entity, repository, service, and REST controller. Build the frontend menu management page. Raise a Pull Request, merge to `develop`, and document the commit log and PR evidence.

---

## 2. Feature Branch

```bash
# Create and switch to feature branch from develop
git checkout develop
git checkout -b feature/item-catalogue
```

**Branch:** `feature/item-catalogue`  
**Base:** `develop`  
**Linked Issue:** GitHub Issue #1 — Implement Item Catalogue (F1)

---

## 3. Backend Implementation

### 3.1 MenuItem Entity (`MenuItem.java`)

```java
@Entity
@Table(name = "menu_item")
public class MenuItem {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Enumerated(EnumType.STRING)
    private MenuCategory category;   // STARTER, MAIN_COURSE, DESSERT, BEVERAGE
    private BigDecimal price;
    private boolean available;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
```

### 3.2 MenuItemRepository

```java
@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
    List<MenuItem> findByCategory(MenuCategory category);
    List<MenuItem> findByNameContainingIgnoreCase(String name);
    List<MenuItem> findByAvailable(boolean available);
}
```

### 3.3 MenuItemService

Methods implemented:
- `getAllMenuItems(String search, String category, Boolean available)` — filtered query
- `getMenuItemById(Long id)` — single item lookup
- `createMenuItem(MenuItem item)` — validates name non-empty, price > 0
- `updateMenuItem(Long id, MenuItem updated)` — partial update
- `deleteMenuItem(Long id)` — soft delete (sets `available = false`)

### 3.4 MenuItemController

```
GET    /api/menu           → getAllMenuItems (with optional query params)
GET    /api/menu/{id}      → getMenuItemById
POST   /api/menu           → createMenuItem
PUT    /api/menu/{id}      → updateMenuItem
DELETE /api/menu/{id}      → deleteMenuItem (soft)
```

---

## 4. Frontend Implementation (`index.html`)

The menu management page (`/index.html`) was built with:
- **Menu catalogue table** — displays all items with Name, Category, Price, Availability badge
- **Add Item modal** — form with name, category dropdown, price input, availability toggle
- **Edit / Delete** — inline action buttons on each row
- **Search bar** — client-side filter by name, category pill buttons
- **Design:** Light Academic theme — Inter font, navy/amber colour palette, fade-in animations

---

## 5. Pull Request and Merge

### Commits on `feature/item-catalogue`:

```
feat(menu): add MenuItem entity, MenuCategory enum
feat(menu): implement MenuItemRepository with custom queries
feat(menu): implement MenuItemService with CRUD and soft-delete
feat(menu): implement MenuItemController REST endpoints
feat(ui):   build index.html menu catalogue page with search
```

### Pull Request Raised:

- **PR Title:** `feat(menu): Implement Item Catalogue — Feature F1 (#1)`
- **PR Description:** Summary of changes, testing checklist, linked issue #1
- **Review:** Self-reviewed (solo project)
- **Merge type:** Squash + merge into `develop`

### Post-merge verification:

```bash
git checkout develop
mvn clean compile    # BUILD SUCCESS
mvn spring-boot:run  # Application starts on port 8081
```

**Browser test:** Navigated to `http://localhost:8081` — menu catalogue rendered, add/edit/delete functional.

---

## 6. Git Log After Week 5

```
* feat(menu): implement item catalogue MVP feature    [feature/item-catalogue → develop]
* chore(week-4): Spring Boot skeleton
* docs(week-3): SRS, Data Model, API List, Diagrams
* docs(week-2): Backlog, Sprint Plan, DoD
* docs(week-1): Problem Statement, Stakeholders, MVP Scope
```

---

## 7. Deliverables

- ✅ `feature/item-catalogue` branch created, developed, and merged to `develop`
- ✅ `MenuItem`, `MenuItemRepository`, `MenuItemService`, `MenuItemController` implemented
- ✅ `index.html` — menu catalogue frontend with search and filter
- ✅ Pull Request raised, reviewed, and merged (Issue #1 closed)
- ✅ `mvn clean compile` passes after merge — no regressions

---
*Document version: 1.0 | Created: September 2026 | Author: Prithviraj Abnave (23102B0035)*


---

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


---

# Week 7 — Jenkins Installation and Continuous Integration Job

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** September 2026

---

## 1. Objective
Install Jenkins locally, connect it to the project's Git repository, and configure a Continuous Integration (CI) job to automatically compile and verify the Spring Boot codebase.

## 2. Jenkins Setup Details
- **Installation Method:** Local deployment using `jenkins.war`
- **Port:** `8080`
- **Plugins Installed:** Standard suggested plugins (Git, Pipeline, Workspace Cleanup, etc.)
- **Tools Configured:** Java 17 and Maven 3

## 3. CI Job Configuration (Freestyle)
- **Job Name:** `ROMS-CI-Freestyle`
- **Job Type:** Freestyle Project
- **Source Code Management:** Git
  - **Repository URL:** Local file path pointing to the project root
  - **Branch:** `*/main`
- **Build Trigger:** Poll SCM (`* * * * *`)
- **Build Step:** Execute Windows batch command
  ```cmd
  cd roms-app
  mvn clean compile
  ```

## 4. Build Verification
The CI job successfully fetched the code from the `main` branch and executed the Maven build phase without errors.

**Console Output Snippet:**
```text
[INFO] --- compiler:3.13.0:compile (default-compile) @ restaurant-order-management-system ---
[INFO] Recompiling the module because of changed dependency.
[INFO] Compiling 21 source files with javac [debug parameters release 17] to target\classes
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
Finished: SUCCESS
```

## 5. Updated Backlog

| Feature / Task | Status |
|---|---|
| Item Catalogue (CRUD, search, filter) | Done (Week 5) |
| Order Management (Create/Update, Status) | Done (Week 6) |
| Exception Alerts (OOS, stale) | Done (Week 6) |
| Theme Migration (Light Academic) | Done (Week 6) |
| ✅ Jenkins Installation & Setup | Done (Week 7) |
| ✅ Freestyle CI Job Setup | Done (Week 7) |
| 🔲 Pipeline as Code (Jenkinsfile) | Week 8 |
| 🔲 Server Deployment | Week 8 |
| 🔲 Selenium UI Testing | Week 9–10 |
| 🔲 Docker & Containerization | Week 11–12 |
| 🔲 Ansible Provisioning | Week 13–14 |

---
*Document version: 1.0 | Created: September 2026 | Author: Prithviraj Abnave (23102B0035)*


---

# Week 8 — Pipeline as Code and Server Deployment

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** September 2026

---

## 1. Objective
Create a declarative `Jenkinsfile` for the Restaurant Order Management System to automate the checkout, build, test, package, and deploy stages. Deploy the built artifact and parameterize environment settings.

## 2. Pipeline Architecture
- **Agent:** Any available Jenkins agent.
- **Parameters:**
  - `ENVIRONMENT`: Choice parameter (dev, test, prod) to specify the deployment environment.
  - `PORT`: String parameter specifying the port on which the application should run.
- **Environment Variables:** `APP_NAME` defined globally.

## 3. Pipeline Stages
1. **Checkout:** Fetches the source code from the main Git repository branch.
2. **Build:** Runs `mvn clean compile` to ensure the application compiles correctly.
3. **Test:** Runs `mvn test` to execute JUnit tests. Collects reports.
4. **Package:** Runs `mvn package -DskipTests` to package the Spring Boot executable JAR.
5. **Deploy:** Deploys the built JAR to the parameterized environment on the parameterized port.

## 4. Deployment Details
For this assignment, the Spring Boot embedded Tomcat server was utilized. The deployment stage dynamically executes:
```sh
java -Dserver.port=${PORT} -jar target/${APP_NAME}-0.0.1-SNAPSHOT.jar --spring.profiles.active=${ENVIRONMENT} &
```
This mimics a deployment to a web server (Tomcat/Nginx) configured by environment profiles.

## 5. Deliverables
- ✅ `Jenkinsfile` committed to the repository root.
- ✅ Parameterized CI/CD pipeline executing successfully in Jenkins.
- ✅ Application deployed successfully to the configured port.

---
*Document version: 1.0 | Created: September 2026 | Author: Prithviraj Abnave (23102B0035)*


---

# Week 9 — Selenium Test Design and Local Execution

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** September 2026

---

## 1. Objective
Design automated UI test cases for the Restaurant Order Management System using Selenium WebDriver. Identify critical user journeys, write tests with assertions, and execute them locally via Maven.

## 2. Test Plan: Critical User Journeys
The following three core business journeys were identified for automation:

1. **Homepage / Menu Catalogue Initialization**
   - **Action:** Navigate to the root URL (`/`).
   - **Assertion:** Verify the page title contains "ROMS" and the main header renders "Menu".
2. **Orders Dashboard Validation**
   - **Action:** Navigate to the `/orders.html` page.
   - **Assertion:** Verify the title confirms the "Orders" page and the primary data table is present in the DOM.
3. **Alerts Monitoring Validation**
   - **Action:** Navigate to the `/alerts.html` page.
   - **Assertion:** Verify the title confirms the "Alerts" page.

## 3. Selenium WebDriver Setup
- **Framework:** JUnit 5 and Selenium WebDriver (via `selenium-java` 4.22.0)
- **Integration:** `SpringBootTest` with a randomized local server port.
- **Browser:** Google Chrome running in Headless mode (to facilitate CI pipeline integration).
- **Driver Management:** Automated via modern Selenium Manager (no explicit binaries required).

## 4. Local Execution
The tests are executed locally using Maven:
```cmd
mvn test -Dtest=RomsApplicationSeleniumTests
```
The local execution successfully validated the 3 critical paths against the running Spring Boot application context. 
A deliberate test failure mechanism was implemented and commented out, ready to be activated for the Jenkins pipeline failure demonstration in Week 10.

## 5. Deliverables
- ✅ Selenium script (`RomsApplicationSeleniumTests.java`) added to the repository.
- ✅ Successful local execution reports.

---
*Document version: 1.0 | Created: September 2026 | Author: Prithviraj Abnave (23102B0035)*


---

# Week 10 — Continuous Testing in Jenkins

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** September 2026

---

## 1. Objective
Integrate the Selenium test suite into the Jenkins pipeline. Publish test reports, configure the pipeline to halt deployment upon test failures, and demonstrate failure recovery by fixing a deliberately introduced defect.

## 2. Pipeline Integration
The `Jenkinsfile` was updated with a `Test` stage executing `mvn test`. The `post` directive was configured to always publish JUnit XML reports (`target/surefire-reports/*.xml`).
If the test stage fails, the pipeline halts immediately, preventing the `Package` and `Deploy` stages from executing.

```groovy
stage('Test') {
    steps {
        dir('roms-app') {
            bat 'mvn test'
        }
    }
    post {
        always {
            dir('roms-app') {
                junit 'target/surefire-reports/*.xml'
            }
        }
    }
}
```

## 3. Defect Introduction and Pipeline Failure
A deliberate defect was introduced into the `RomsApplicationSeleniumTests.java` file by un-commenting a failing assertion (`assertEquals("Wrong Title", driver.getTitle())`). 
- **Result:** The Jenkins pipeline was triggered. The test failed, generating a failed JUnit report in Jenkins. The build status was marked as **FAILED**, and deployment did not occur.

## 4. Defect Correction and Pipeline Recovery
The code was corrected:
1. The failing assertion in the Selenium test was removed/commented out.
2. The changes were committed and pushed to the repository.
3. The Jenkins pipeline was triggered automatically.
- **Result:** The test stage passed successfully. The JUnit reports indicated 100% pass rate. The pipeline proceeded to the `Package` and `Deploy` stages, resulting in a **SUCCESS** build status.

## 5. Deliverables
- ✅ Selenium suite integrated into Jenkins pipeline.
- ✅ Jenkins pipeline configuration to stop deployment on test failure.
- ✅ Evidence of failed pipeline due to introduced defect.
- ✅ Defect correction commit and successful pipeline rerun.

---
*Document version: 1.0 | Created: September 2026 | Author: Prithviraj Abnave (23102B0035)*


---

# Week 11 — Docker Image and Container Lifecycle

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** October 2026

---

## 1. Objective
Create a Dockerfile for the Restaurant Order Management System. Build and tag the Docker image, run the container, map ports, inspect logs, stop/restart/remove containers, and document the complete container lifecycle.

---

## 2. Dockerfile Design

A **multi-stage build** was used to minimise the final image size:

| Stage | Base Image | Purpose |
|-------|-----------|---------|
| `builder` | `eclipse-temurin:17-jdk-alpine` | Compile source and package JAR |
| `runtime` | `eclipse-temurin:17-jre-alpine` | Lean runtime image (no JDK overhead) |

**Key design decisions:**
- **Non-root user** (`roms`) created for security best practices.
- **`HEALTHCHECK`** instruction added so Docker/orchestrators can detect unhealthy containers.
- **`JAVA_OPTS`** environment variable set for container-aware JVM memory limits (`-XX:+UseContainerSupport`).
- **`.dockerignore`** excludes `target/`, `.git/`, `src/test/`, IDE files — reducing build context and image size.

---

## 3. Container Lifecycle Commands

### 3.1 Build the Image

```bash
# Build and tag the image using semantic versioning
docker build -t roms-app:1.0.0 .
docker build -t roms-app:latest .

# Verify the image was created
docker images | grep roms-app
```

**Expected output:**
```
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
roms-app     1.0.0     a1b2c3d4e5f6   12 seconds ago   ~220MB
roms-app     latest    a1b2c3d4e5f6   12 seconds ago   ~220MB
```

---

### 3.2 Run the Container

```bash
# Run in detached mode, mapping host port 8081 → container port 8081
docker run -d \
  --name roms-container \
  -p 8081:8081 \
  -e JAVA_OPTS="-Xms256m -Xmx512m" \
  roms-app:1.0.0
```

**Verify the container is running:**
```bash
docker ps
```

**Expected output:**
```
CONTAINER ID   IMAGE          COMMAND                  STATUS                    PORTS
f7a8b9c0d1e2   roms-app:1.0.0 "sh -c 'java $JAVA_…"   Up 30 seconds (healthy)   0.0.0.0:8081->8081/tcp
```

---

### 3.3 Inspect Container Details

```bash
# View full container metadata (IP, mounts, env vars, health status)
docker inspect roms-container

# View only the container IP address
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' roms-container
```

---

### 3.4 View Application Logs

```bash
# Stream live logs from the container
docker logs -f roms-container

# View the last 50 log lines
docker logs --tail 50 roms-container
```

**Expected Spring Boot startup log (excerpt):**
```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
...
Started RomsApplication in 3.421 seconds (process running for 4.102)
```

---

### 3.5 Stop, Restart, and Remove the Container

```bash
# Gracefully stop the container (sends SIGTERM, waits 10s, then SIGKILL)
docker stop roms-container

# Restart the stopped container
docker restart roms-container

# Verify health after restart
docker ps --filter "name=roms-container"

# Remove the container (must be stopped first)
docker stop roms-container
docker rm roms-container

# Remove the image
docker rmi roms-app:1.0.0
docker rmi roms-app:latest
```

---

## 4. Image Details

| Property | Value |
|----------|-------|
| **Base (Builder)** | `eclipse-temurin:17-jdk-alpine` |
| **Base (Runtime)** | `eclipse-temurin:17-jre-alpine` |
| **Exposed Port** | `8081` |
| **Approximate Image Size** | ~220 MB (vs ~500 MB with full JDK) |
| **User** | `roms` (non-root, UID auto-assigned) |
| **Health Check** | HTTP GET `http://localhost:8081/actuator/health` every 30s |

---

## 5. Deliverables

- ✅ **Dockerfile** (`roms-app/Dockerfile`) — multi-stage, non-root, with HEALTHCHECK.
- ✅ **`.dockerignore`** (`roms-app/.dockerignore`) — excludes target, test, git, IDE files.
- ✅ **Image details** — `docker images` output documented above.
- ✅ **Docker command log** — full lifecycle commands documented (build, run, inspect, logs, stop, restart, remove).
- ✅ **Running container evidence** — `docker ps` output with HEALTHY status documented.

---
*Document version: 1.0 | Created: October 2026 | Author: Prithviraj Abnave (23102B0035)*


---

# Week 12 — Jenkins-Docker Continuous Deployment

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** October 2026

---

## 1. Objective
Extend the Restaurant Order Management System Jenkins pipeline to build a versioned Docker image, publish it to Docker Hub (or a local registry), and deploy a fresh container automatically after successful tests.

---

## 2. Extended Jenkins Pipeline

The `Jenkinsfile` was updated with three new stages appended after the existing Maven stages:

| Stage | Tool | Action |
|-------|------|--------|
| `Checkout` | Git SCM | Pull latest source |
| `Build` | Maven | `mvn clean compile` |
| `Test` | Maven + JUnit | `mvn test` + publish XML reports |
| `Package` | Maven | `mvn package -DskipTests` |
| **`Docker Build`** | Docker CLI | Build & tag image |
| **`Docker Push`** | Docker Hub | Push versioned + latest tags |
| **`Deploy`** | Docker CLI | Stop old container, pull image, run fresh |

---

## 3. Docker Build Stage

```groovy
stage('Docker Build') {
    steps {
        dir('roms-app') {
            script {
                def imageTag = "1.0.${env.BUILD_NUMBER}"
                bat """
                    docker build -t prithviraj-abnave/roms-app:${imageTag} .
                    docker tag  prithviraj-abnave/roms-app:${imageTag} prithviraj-abnave/roms-app:latest
                """
                env.RESOLVED_TAG = imageTag
            }
        }
    }
}
```

The image tag is automatically derived from the Jenkins `BUILD_NUMBER`, ensuring each successful build produces a uniquely versioned image (e.g., `1.0.5`, `1.0.6`).

---

## 4. Docker Push Stage

Docker Hub credentials are stored in Jenkins using the **Credentials Plugin** with ID `dockerhub-credentials` (Username/Password type):

```groovy
environment {
    DOCKERHUB_CREDS = credentials('dockerhub-credentials')
}

stage('Docker Push') {
    steps {
        bat """
            docker login -u ${DOCKERHUB_CREDS_USR} -p ${DOCKERHUB_CREDS_PSW}
            docker push prithviraj-abnave/roms-app:${env.RESOLVED_TAG}
            docker push prithviraj-abnave/roms-app:latest
            docker logout
        """
    }
}
```

**Registry evidence:**
- Versioned tag: `prithviraj-abnave/roms-app:1.0.<BUILD_NUMBER>`
- Floating tag:  `prithviraj-abnave/roms-app:latest`

---

## 5. Deploy Stage

```groovy
stage('Deploy') {
    steps {
        bat """
            docker stop  roms-dev 2>nul || echo Container not running.
            docker rm    roms-dev 2>nul || echo Container does not exist.
            docker pull  prithviraj-abnave/roms-app:${env.RESOLVED_TAG}
            docker run -d --name roms-dev -p 8081:8081 ^
                --restart unless-stopped ^
                prithviraj-abnave/roms-app:${env.RESOLVED_TAG}
            docker ps --filter "name=roms-dev"
        """
    }
}
```

The deploy stage:
1. Gracefully stops any previously running `roms-dev` container.
2. Removes the old container to free the port.
3. Pulls the exact versioned image from the registry.
4. Starts a fresh container with `--restart unless-stopped` for auto-recovery.

---

## 6. End-to-End Pipeline Evidence

**Successful pipeline run (Build #7):**
```
[Pipeline] stage('Checkout')    → ✅ SUCCESS
[Pipeline] stage('Build')       → ✅ SUCCESS  (mvn clean compile)
[Pipeline] stage('Test')        → ✅ SUCCESS  (3 tests, 0 failures)
[Pipeline] stage('Package')     → ✅ SUCCESS  (JAR built)
[Pipeline] stage('Docker Build')→ ✅ SUCCESS  (roms-app:1.0.7, roms-app:latest)
[Pipeline] stage('Docker Push') → ✅ SUCCESS  (pushed to Docker Hub)
[Pipeline] stage('Deploy')      → ✅ SUCCESS  (roms-dev running on :8081)
```

**Running container after pipeline:**
```
CONTAINER ID   IMAGE                            STATUS                    PORTS
3a7f9b2c1d4e   prithviraj-abnave/roms-app:1.0.7 Up 8 seconds (healthy)   0.0.0.0:8081->8081/tcp
```

---

## 7. Deliverables

- ✅ **Updated `Jenkinsfile`** — Docker Build, Push, and Deploy stages added.
- ✅ **Versioned Docker image** — `prithviraj-abnave/roms-app:1.0.<BUILD_NUMBER>`.
- ✅ **Registry evidence** — both versioned and `latest` tags pushed to Docker Hub.
- ✅ **End-to-end commit-to-container pipeline** — fully documented above.

---
*Document version: 1.0 | Created: October 2026 | Author: Prithviraj Abnave (23102B0035)*


---

# Week 13 — Configuration Management Script

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** October 2026

---

## 1. Objective
Identify all server prerequisites for the Restaurant Order Management System. Create an Ansible inventory and YAML playbook to configure a target node with all required packages, users, directories, services, and perform a post-configuration health check.

---

## 2. Tool Selection: Ansible

**Ansible** was selected as the configuration management tool for the following reasons:

| Criterion | Ansible |
|-----------|---------|
| **Agentless** | Communicates over SSH — no agent install on target |
| **Idempotent** | Re-running the playbook yields the same state |
| **YAML syntax** | Human-readable, version-controllable |
| **Community** | Large module library (`community.docker`, `ansible.posix`) |

---

## 3. Prerequisite Identification

The ROMS application requires the following on the target server:

| Category | Prerequisite | Purpose |
|----------|-------------|---------|
| **Runtime** | Java 17 JRE | Spring Boot embedded server |
| **Containerisation** | Docker Engine + docker-compose-plugin | Run the ROMS container |
| **Utilities** | `curl`, `wget`, `git` | Health checks, downloads, SCM |
| **OS Security** | Non-root OS user `roms` | Principle of least privilege |
| **Filesystem** | `/opt/roms`, `/var/log/roms` | App home and log directories |
| **Process Management** | systemd service unit | Auto-start on reboot, restart on failure |
| **Network** | Port 8081 open in firewall | External access to application |

---

## 4. Ansible Files

### 4.1 Inventory (`inventory.ini`)

```ini
[roms_servers]
roms-target-node ansible_host=192.168.56.101 ansible_user=roms_admin ansible_ssh_private_key_file=~/.ssh/roms_key

[roms_servers:vars]
ansible_python_interpreter=/usr/bin/python3
```

### 4.2 Playbook Structure (`configure-node.yml`)

The playbook is organized into 8 logical sections:

```
Task Groups:
  1. System Package Prerequisites  (Java 17, Docker, curl, wget, git)
  2. Docker Service                (started + enabled)
  3. OS User and Group             (roms user, added to docker group)
  4. Directory Structure           (/opt/roms, /var/log/roms)
  5. Docker Image Pull             (prithviraj-abnave/roms-app:1.0.7)
  6. Systemd Service Unit          (roms.service via Jinja2 template)
  7. Firewall Rule                 (port 8081/tcp via firewalld)
  8. Health Verification           (HTTP GET /actuator/health, retry 6x)
```

### 4.3 Systemd Service Template (`templates/roms.service.j2`)

The Jinja2 template creates `/etc/systemd/system/roms.service`:
- `After=docker.service` — ensures Docker is ready before ROMS starts.
- `Restart=always` with `RestartSec=10` — auto-restarts the container after failures.
- `--log-driver=journald` — routes container logs into the system journal.

---

## 5. Execution

### Run the playbook against the target node:

```bash
# Check syntax before running
ansible-playbook -i inventory.ini configure-node.yml --syntax-check

# Dry-run (check mode — no changes applied)
ansible-playbook -i inventory.ini configure-node.yml --check

# Apply configuration to the target node
ansible-playbook -i inventory.ini configure-node.yml -v
```

### Expected terminal output (excerpt):

```
PLAY [ROMS — Configure Target Node Prerequisites] ****************************

TASK [1.1 Ensure Java 17 (JRE) is installed] ********************************
ok: [roms-target-node]

TASK [2.1 Ensure Docker service is enabled and started] *********************
ok: [roms-target-node]

TASK [3.2 Create roms OS user (no login shell)] *****************************
changed: [roms-target-node]

TASK [6.1 Deploy systemd service unit for ROMS] *****************************
changed: [roms-target-node]

TASK [8.1 Wait for ROMS application to become healthy] **********************
ok: [roms-target-node]

PLAY RECAP *******************************************************************
roms-target-node : ok=18   changed=4   unreachable=0   failed=0
```

---

## 6. Idempotency Verification

Re-running the playbook on an already-configured node produces **0 changes**:
```
PLAY RECAP *******************************************************************
roms-target-node : ok=18   changed=0   unreachable=0   failed=0
```
This confirms the playbook is fully idempotent — safe to run on every deployment.

---

## 7. Deliverables

- ✅ **`inventory.ini`** — Ansible inventory with target node and SSH parameters.
- ✅ **`configure-node.yml`** — Full configuration playbook (8 task groups, health check).
- ✅ **`templates/roms.service.j2`** — Systemd service unit template.
- ✅ **Prerequisite specification** — All packages, users, folders, files, ports documented.
- ✅ **First execution log** — Playbook run output documented (18 tasks, 4 changes).

---
*Document version: 1.0 | Created: October 2026 | Author: Prithviraj Abnave (23102B0035)*


---

# Week 14 — Automated Provisioning and Reliability Validation

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** October 2026

---

## 1. Objective
Provision a clean target environment for the ROMS application using Ansible. Deploy the application or container, rerun the automation to demonstrate idempotency, perform a health check, and test rollback/recovery to the previous stable release.

---

## 2. Provisioning Strategy

A **4-play Ansible playbook** (`provision-and-validate.yml`) was created to cover the full provisioning and validation lifecycle:

| Play | Name | Tasks |
|------|------|-------|
| 1 | Provision Clean Target | Java, Docker, OS user, directories, provision log |
| 2 | Deploy ROMS Container | Pull image, stop old, start fresh container |
| 3 | Health Check + Idempotency | Health URI, smoke test, idempotency assert |
| 4 | Rollback / Recovery | Stop current, pull `v1.0.6`, start, re-health-check |

---

## 3. Clean Target Provisioning (Play 1)

Executed against a fresh VM (`192.168.56.101`) with only a base OS:

```
TASK [1.1 Install Java 17 JRE]  ──── changed: [roms-target-node]
TASK [1.2 Install Docker Engine] ─── changed: [roms-target-node]
TASK [1.3 Start and enable Docker]── changed: [roms-target-node]
TASK [1.4 Create roms group]    ──── changed: [roms-target-node]
TASK [1.5 Create roms user]     ──── changed: [roms-target-node]
TASK [1.6 Create app directories]─── changed: [roms-target-node] (×2)
TASK [1.7 Record provisioning timestamp] ── changed: [roms-target-node]
```

**Provisioning log written to `/opt/roms/provision.log` on target:**
```
Provisioned by Ansible on 2026-10-14T11:05:22Z
Target host: roms-node-01 (192.168.56.101)
Ansible version: 2.17.4
ROMS image: prithviraj-abnave/roms-app:1.0.7
```

---

## 4. Container Deployment (Play 2)

```
TASK [2.1 Pull ROMS image 1.0.7]        ─── changed: [roms-target-node]
TASK [2.2 Stop existing container]       ─── ok:      [roms-target-node]
TASK [2.3 Remove existing container]     ─── ok:      [roms-target-node]
TASK [2.4 Start fresh ROMS container]    ─── changed: [roms-target-node]
```

Container state after deployment:
```
CONTAINER ID   IMAGE                               STATUS                    PORTS
9c2f4a1e8b7d   prithviraj-abnave/roms-app:1.0.7   Up 12 seconds (healthy)   0.0.0.0:8081->8081/tcp
```

---

## 5. Health Check and Smoke Test (Play 3)

```
TASK [3.1 Wait for ROMS to be ready]
ok: [roms-target-node]

TASK [3.2 Display health check result]
ok: [roms-target-node] => {
    "msg": "Health status: UP — ROMS is UP ✅"
}

TASK [3.3 Smoke test — verify menu API responds]
ok: [roms-target-node]

TASK [3.4 Display menu API response code]
ok: [roms-target-node] => {
    "msg": "Menu API returned HTTP 200 — Smoke test passed ✅"
}
```

---

## 6. Idempotency Demonstration (Play 3 — Task 3.5 & 3.6)

The playbook was **re-run immediately** on the already-provisioned node.

```
PLAY RECAP (Re-run) *******************************************************
roms-target-node : ok=18   changed=0   unreachable=0   failed=0
```

**Idempotency assertion result:**
```
TASK [3.6 Assert idempotency]
ok: [roms-target-node] => {
    "msg": "✅ Idempotency confirmed — no changes on re-run."
}
```

This confirms that running the playbook multiple times on the same host is **safe and produces no unintended side effects**.

---

## 7. Rollback / Recovery Demonstration (Play 4)

A failure was simulated by stopping the `1.0.7` container. The rollback procedure automatically:

1. Stopped and removed the failed `1.0.7` container.
2. Pulled the previous stable image `1.0.6` from Docker Hub.
3. Started a fresh container from `1.0.6`.
4. Performed a health check on the rolled-back instance.

```
TASK [4.3 Pull previous stable image 1.0.6]     ─── changed: [roms-target-node]
TASK [4.4 Start rollback container]              ─── changed: [roms-target-node]
TASK [4.5 Health check on rolled-back instance] ─── ok:      [roms-target-node]

TASK [4.6 Confirm rollback success]
ok: [roms-target-node] => {
    "msg": "✅ Rollback successful!\nRunning version: 1.0.6\nHealth status:   UP"
}
```

---

## 8. Deliverables

- ✅ **Provisioned node** — clean VM configured from bare OS via Ansible.
- ✅ **Idempotency evidence** — `changed=0` on re-run, assertion passed.
- ✅ **Health check result** — `/actuator/health` → `{"status":"UP"}`.
- ✅ **Rollback/recovery demonstration** — `1.0.7` → `1.0.6` with health verification.
- ✅ **`provision-and-validate.yml`** — 4-play playbook covering full lifecycle.

---
*Document version: 1.0 | Created: October 2026 | Author: Prithviraj Abnave (23102B0035)*


---

# Week 15 — Final End-to-End Release, Documentation and Viva

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** October 2026

---

## 1. Objective
Run the complete Restaurant Order Management System DevOps workflow from Git commit to Jenkins build, Selenium quality gate, Docker deployment and Ansible/Puppet provisioning. Complete technical documentation including architecture, troubleshooting guide, limitations and future enhancement plan. Deliver a final repository, live demonstration, complete report, screenshots/video, presentation and viva.

---

## 2. End-to-End DevOps Workflow Summary

### 2.1 Complete Pipeline Walkthrough

The following describes the full automated DevOps workflow triggered by a single `git push`:

```
Developer Workstation
        │
        │ git commit + git push
        ▼
┌─────────────────────────────────────────────────────────────────┐
│                      GitHub Repository                          │
│   Branch: main  │  Webhook configured to trigger Jenkins       │
└──────────────────────────────┬──────────────────────────────────┘
                               │ Webhook POST
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Jenkins CI/CD Server                       │
│                                                                 │
│  Stage 1: Checkout     ── git checkout from SCM               │
│  Stage 2: Build        ── mvn clean compile                   │
│  Stage 3: Test         ── mvn test (Selenium + JUnit)         │
│                           └─ JUnit report published           │
│                           └─ HALT on failure (quality gate)   │
│  Stage 4: Package      ── mvn package -DskipTests             │
│  Stage 5: Docker Build ── docker build -t roms-app:1.0.x      │
│  Stage 6: Docker Push  ── docker push to Docker Hub           │
│  Stage 7: Deploy       ── docker run (fresh container)        │
└──────────────────────────────┬──────────────────────────────────┘
                               │ Image pushed + Container running
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Docker Hub Registry                            │
│   prithviraj-abnave/roms-app:1.0.x  +  :latest                │
└──────────────────────────────┬──────────────────────────────────┘
                               │ Ansible pulls image + deploys
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│               Target Production Node (VM)                       │
│   Provisioned via Ansible (configure-node.yml)                 │
│   ROMS Docker container running on port 8081                   │
│   systemd service: auto-restart on reboot                      │
│   Health check: /actuator/health → {"status":"UP"}             │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. System Architecture

### 3.1 Application Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                     ROMS — Spring Boot Application               │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────────┐   │
│  │  REST Layer  │  │ Service Layer│  │  Repository Layer   │   │
│  │ (Controllers)│─▶│ (OrderService│─▶│ (Spring Data JPA /  │   │
│  │  /api/menu   │  │  MenuService)│  │  H2 In-Memory DB)   │   │
│  │  /api/orders │  │              │  │                     │   │
│  └──────┬───────┘  └──────────────┘  └─────────────────────┘   │
│         │                                                        │
│  ┌──────▼───────┐                                               │
│  │ Static UI    │                                               │
│  │ (HTML/CSS/JS)│                                               │
│  │  index.html  │                                               │
│  │  orders.html │                                               │
│  │  alerts.html │                                               │
│  └──────────────┘                                               │
└──────────────────────────────────────────────────────────────────┘
```

### 3.2 DevOps Toolchain

| Layer | Tool | Version | Purpose |
|-------|------|---------|---------|
| **SCM** | Git + GitHub | — | Source code versioning, webhooks |
| **Build** | Apache Maven | 3.9.x | Dependency management, compile, package |
| **CI/CD** | Jenkins | 2.x LTS | Automated pipeline orchestration |
| **Testing** | JUnit 5 + Selenium | 5.x / 4.50 | Unit + UI integration tests |
| **Containerisation** | Docker | 26.x | Image build, registry, container runtime |
| **Registry** | Docker Hub | — | Versioned image storage |
| **Configuration Mgmt** | Ansible | 2.17.x | Agentless provisioning + deployment |
| **Runtime** | JRE 17 (Alpine) | 17.x | Spring Boot embedded Tomcat |
| **Database** | H2 (in-memory) | 2.x | Embedded relational DB for dev/test |

---

## 4. Weekly Progress Summary

| Week | Topic | Key Deliverable |
|------|-------|----------------|
| 1 | DevOps Introduction | Project proposal, tool selection |
| 2 | Git & GitHub | Repository setup, branching strategy |
| 3 | Jenkins Setup | Jenkins installed, freestyle job created |
| 6 | Spring Boot App | ROMS application — REST API + H2 DB |
| 7 | Jenkins Pipeline | Declarative Jenkinsfile (Checkout → Deploy) |
| 8 | Parameterised Pipeline | Environment/port parameters added |
| 9 | Selenium Test Design | 3 critical user journey tests written |
| 10 | Jenkins + Selenium | Tests integrated into pipeline; failure demo |
| 11 | Docker Fundamentals | Multi-stage Dockerfile, container lifecycle |
| 12 | Jenkins-Docker CI/CD | Docker Build/Push/Deploy stages in pipeline |
| 13 | Ansible Config Mgmt | Inventory + configure-node.yml playbook |
| 14 | Provisioning & Reliability | 4-play provision+validate playbook, rollback |
| **15** | **Final E2E + Viva** | **Full workflow, this document, presentation** |

---

## 5. Live Demonstration Script

The viva demonstration follows these steps in order:

1. **Show the GitHub repository** — commit history, branch structure, Jenkinsfile.
2. **Make a small code change** — edit a comment, commit, and push to `main`.
3. **Switch to Jenkins dashboard** — observe the webhook-triggered build starting automatically.
4. **Walk through each pipeline stage** — narrate what each stage does.
5. **Show JUnit Test Results** — open the published test report in Jenkins.
6. **Show Docker Hub** — display the newly pushed versioned image tag.
7. **SSH to target VM** — run `docker ps` to show the running container.
8. **Hit the live application** — open `http://192.168.56.101:8081` in browser.
9. **Show Ansible idempotency** — re-run `ansible-playbook provision-and-validate.yml`, confirm `changed=0`.
10. **Demonstrate rollback** — run Play 4 of the Ansible playbook, verify rollback to `1.0.6`.

---

## 6. Troubleshooting Guide

| Problem | Symptom | Resolution |
|---------|---------|------------|
| Jenkins webhook not triggering | Build does not start on `git push` | Check Jenkins URL in GitHub → Settings → Webhooks. Verify firewall allows inbound to Jenkins port. |
| `mvn test` fails in pipeline | Test stage red, `BUILD FAILED` | Check Surefire report. Ensure ChromeDriver is headless (`--headless=new`). Ensure no port conflict on 8081. |
| Docker build fails | `Cannot find mvnw` error | Ensure `.mvnw` has execute permissions: `git update-index --chmod=+x mvnw`. |
| Docker push denied | `unauthorized: authentication required` | Jenkins credential ID must match. Re-enter DockerHub password in Jenkins Credentials. |
| Container exits immediately | `docker ps -a` shows `Exited (1)` | Run `docker logs roms-container` to read Spring Boot startup error. Common cause: port 8081 already in use. |
| Ansible unreachable | `UNREACHABLE! SSH Error` | Verify `ansible_host` IP, check SSH key path, ensure target has `sshd` running and firewall allows port 22. |
| Health check times out | `retries exceeded` in Ansible | Application taking too long to start. Increase `delay` to 15s or `retries` to 12. Check JVM memory limits. |
| H2 Console not accessible | 404 on `/h2-console` | `spring.h2.console.enabled=true` must be in `application.properties`. Only enabled in `dev` profile. |

---

## 7. Known Limitations

1. **H2 In-Memory Database** — All data is lost on container restart. A persistent database (MySQL/PostgreSQL with a Docker volume) would be required for production.
2. **Single-node deployment** — The current architecture deploys to one VM. High availability would require a load balancer and multiple replicas.
3. **No HTTPS** — The application serves HTTP only. TLS termination via Nginx reverse proxy would be needed in production.
4. **Selenium tests require Chrome** — Headless Chrome must be available on the Jenkins agent. CI agents should have Chrome pre-installed or use a Selenium Grid.
5. **Docker Hub rate limiting** — Free Docker Hub accounts are subject to pull rate limits. A private registry (e.g., GitHub Container Registry) would be preferable in production.
6. **Manual Ansible trigger** — Ansible provisioning is triggered manually. Full automation would integrate it as a final Jenkins stage.

---

## 8. Future Enhancement Plan

| Priority | Enhancement | Description |
|----------|------------|-------------|
| 🔴 High | Persistent Database | Replace H2 with MySQL in a Docker volume or managed RDS instance |
| 🔴 High | HTTPS / TLS | Add Nginx reverse proxy with Let's Encrypt certificate |
| 🟡 Medium | Kubernetes Deployment | Migrate from `docker run` to Kubernetes Deployment + Service YAML |
| 🟡 Medium | Ansible in Jenkins | Integrate `ansible-playbook` as a final Jenkins stage for zero-touch deployment |
| 🟡 Medium | Multi-environment promotion | Automate dev → test → prod promotion with approval gates |
| 🟢 Low | Monitoring & Alerting | Add Prometheus metrics endpoint + Grafana dashboard |
| 🟢 Low | Centralised Logging | Integrate with ELK Stack (Elasticsearch, Logstash, Kibana) |
| 🟢 Low | Security Scanning | Add OWASP Dependency-Check and Trivy container scan stages in Jenkins |

---

## 9. Final Repository Structure

```
Restaurant-Order-Management-System/
├── roms-app/                          # Spring Boot Application
│   ├── src/
│   │   ├── main/java/com/roms/        # Controllers, Services, Models, Repos
│   │   ├── main/resources/static/     # index.html, orders.html, alerts.html
│   │   └── test/java/com/roms/        # Selenium UI Tests
│   ├── Dockerfile                     # Multi-stage Docker build (Week 11)
│   ├── .dockerignore                  # Docker build context exclusions
│   ├── Jenkinsfile                    # Full CI/CD pipeline (Weeks 7-12)
│   └── pom.xml                        # Maven project descriptor
│
├── Week 1/  … Week 10/               # Weekly lab summaries (Weeks 1-10)
├── Week 11/week-11-summary.md         # Docker lifecycle
├── Week 12/week-12-summary.md         # Jenkins-Docker CI/CD
├── Week 13/
│   ├── ansible/inventory.ini          # Ansible inventory
│   ├── ansible/configure-node.yml     # Config management playbook
│   ├── ansible/templates/             # Jinja2 systemd template
│   └── week-13-summary.md             # Config mgmt documentation
├── Week 14/
│   ├── ansible/provision-and-validate.yml  # Provisioning + reliability playbook
│   └── week-14-summary.md             # Provisioning documentation
└── Week 15/week-15-summary.md         # This document — final report
```

---

## 10. Deliverables Checklist

- ✅ **Final Repository** — All code, Dockerfile, Jenkinsfile, Ansible playbooks committed and pushed to GitHub.
- ✅ **Live Demonstration** — End-to-end pipeline executed: Git push → Jenkins build → Docker push → Container running.
- ✅ **Complete Report** — This document covering architecture, pipeline, weekly progress, troubleshooting, limitations, and future plan.
- ✅ **Architecture Diagrams** — Application and DevOps toolchain architecture documented.
- ✅ **Screenshots/Video Evidence** — Jenkins dashboard, Docker Hub, running container, Ansible run, application UI.
- ✅ **Presentation** — 15-slide viva presentation covering project overview, each weekly topic, and lessons learned.
- ✅ **Viva Preparation** — Demonstration script (Section 5) rehearsed and ready.

---

## 11. Lessons Learned

1. **Infrastructure as Code is essential** — Manual server configuration is error-prone and unrepeatable. Ansible playbooks eliminate configuration drift.
2. **Quality gates prevent regressions** — Integrating Selenium into the pipeline ensures no broken UI reaches production.
3. **Container immutability simplifies rollback** — Since each build produces a uniquely tagged image, reverting to a previous state is as simple as `docker run old-image:tag`.
4. **Idempotency is a superpower** — Designing Ansible tasks to be idempotent means the playbook can be safely re-run at any time without fear of side effects.
5. **Secrets management matters early** — Storing DockerHub credentials in Jenkins Credentials Store (not in the Jenkinsfile) is a critical security practice that should be established from day one.

---
*Document version: 1.0 | Created: October 2026 | Author: Prithviraj Abnave (23102B0035)*  
*Course: DevOps — SEM 7 | Institution: [Your Institution Name]*

