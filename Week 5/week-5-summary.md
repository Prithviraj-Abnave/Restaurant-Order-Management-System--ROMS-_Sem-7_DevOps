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
