# Product Backlog — Restaurant Order Management System

> **Last Updated**: August 2026
> **Backlog Owner**: Prithviraj Abnave (23102B0035)

---

## User Stories

### US-01 — Add / Edit / Delete Menu Items

- **As a** restaurant manager
- **I want to** add, edit, and delete menu items from the catalogue
- **So that** the menu stays current and accurate for the staff

**Acceptance Criteria:**
- Manager can add a new item with name, category, price, and availability status
- Manager can edit any field of an existing item
- Manager can delete an item (soft delete — item is hidden, not permanently removed)
- All inputs are validated: name is required, price must be greater than 0, category must be from the predefined list (Starter, Main Course, Dessert, Beverage)
- Changes are saved to the database and reflected immediately in the catalogue view
- **Related Feature**: F1 (Item Catalogue Management)
- **Priority**: Must Have
- **Estimated Sprint**: Week 5

---

### US-02 — View Menu Catalogue

- **As a** waiter
- **I want to** view all available menu items in one place
- **So that** I can quickly find items when taking a customer's order

**Acceptance Criteria:**
- All menu items are displayed in a list/grid view
- Each item shows its name, category, price, and availability status
- Items can be sorted by name, category, or price
- Unavailable items are visually distinguished (greyed out or marked)
- **Related Feature**: F1 (Item Catalogue Management)
- **Priority**: Must Have
- **Estimated Sprint**: Week 5

---

### US-03 — Create a New Order

- **As a** waiter
- **I want to** create a new order by selecting items and specifying a table number
- **So that** the kitchen receives the order immediately without paper chits

**Acceptance Criteria:**
- Waiter selects a table number and adds one or more menu items with quantities
- Order total is auto-calculated based on item prices multiplied by quantities
- Order is assigned initial status "Placed" on creation
- Creation timestamp is recorded
- The order appears on the kitchen display immediately
- Out-of-stock items are flagged/blocked when the waiter tries to add them
- **Related Feature**: F2 (Create / Update Order)
- **Priority**: Must Have
- **Estimated Sprint**: Week 6

---

### US-04 — Update an Existing Order

- **As a** waiter
- **I want to** modify an existing order (add/remove items, change quantities)
- **So that** I can handle customer changes without creating a new order

**Acceptance Criteria:**
- Waiter can add new items or remove existing items from the order
- Waiter can change the quantity of any item in the order
- Modifications are only allowed when order status is "Placed" or "Preparing"
- Order total is recalculated after every modification
- Last-updated timestamp is recorded
- **Related Feature**: F2 (Create / Update Order)
- **Priority**: Must Have
- **Estimated Sprint**: Week 6

---

### US-05 — Update Order Status

- **As a** kitchen staff member
- **I want to** update the status of an order as I work on it
- **So that** waiters know when the food is ready without walking to the kitchen

**Acceptance Criteria:**
- Kitchen staff can move an order through the lifecycle: Placed → Preparing → Ready → Served → Closed
- Only valid forward transitions are allowed (cannot skip steps or go backward)
- Each status change records a timestamp
- Status change is reflected in real time on the waiter's screen
- Visual indicators (colour-coded badges) show the current status clearly
- **Related Feature**: F3 (Order Status Tracking)
- **Priority**: Must Have
- **Estimated Sprint**: Week 6

---

### US-06 — View Orders by Status (Kitchen Display)

- **As a** kitchen staff member
- **I want to** see all incoming orders grouped by their status
- **So that** I can prioritise what to cook first

**Acceptance Criteria:**
- Kitchen display shows orders in columns or sections: Placed, Preparing, Ready
- Orders within each group are sorted chronologically (oldest first)
- Each order shows the table number, items with quantities, and time since placement
- New orders appear at the top of the "Placed" column automatically
- **Related Feature**: F3 (Order Status Tracking)
- **Priority**: Must Have
- **Estimated Sprint**: Week 6

---

### US-07 — Search Menu Items

- **As a** waiter or manager
- **I want to** search for menu items by name or filter by category
- **So that** I can quickly find specific items

**Acceptance Criteria:**
- Search by item name with partial match (typing "pan" finds "Paneer Tikka")
- Filter by category (Starter, Main Course, Dessert, Beverage)
- Filter by availability (show only available / only unavailable / all)
- Results update dynamically as the user types or selects filters
- "No results found" message when filters return empty
- **Related Feature**: F4 (Search and Filter)
- **Priority**: Should Have
- **Estimated Sprint**: Week 6

---

### US-08 — Filter and Search Orders

- **As a** manager
- **I want to** filter orders by status and date, and search by order ID or table number
- **So that** I can track performance and review past orders

**Acceptance Criteria:**
- Filter orders by status (Placed, Preparing, Ready, Served, Closed)
- Filter orders by date range (from date — to date)
- Search by order ID or table number
- Results update dynamically
- "No results found" message when filters return empty
- **Related Feature**: F4 (Search and Filter)
- **Priority**: Should Have
- **Estimated Sprint**: Week 6

---

### US-09 — Out-of-Stock Alert

- **As the** system
- **I want to** raise an alert when a waiter tries to order an unavailable item
- **So that** the waiter can immediately inform the customer and suggest alternatives

**Acceptance Criteria:**
- Alert is triggered when a waiter adds an item that is marked as unavailable to an order
- The alert is visible on the alert dashboard with type "Out of Stock", item name, and timestamp
- The waiter sees an immediate warning on the order creation screen
- Manager can mark the alert as resolved after taking action
- **Related Feature**: F5 (Exception Alerts)
- **Priority**: Should Have
- **Estimated Sprint**: Week 6

---

### US-10 — Stale Order Alert

- **As the** system
- **I want to** raise an alert when an order has been in "Placed" or "Preparing" status for more than 30 minutes
- **So that** the manager and kitchen staff can take corrective action

**Acceptance Criteria:**
- System periodically checks for orders stuck in "Placed" or "Preparing" for over 30 minutes
- Alert is generated with type "Stale Order", order ID, table number, time elapsed, and timestamp
- Alert appears on the alert dashboard
- Manager can mark the alert as resolved
- **Related Feature**: F5 (Exception Alerts)
- **Priority**: Should Have
- **Estimated Sprint**: Week 6

---

### US-11 — Alert Dashboard

- **As a** manager
- **I want to** see all active alerts in one place
- **So that** I can quickly identify and resolve operational issues

**Acceptance Criteria:**
- Dashboard shows all unresolved alerts sorted by creation time (newest first)
- Each alert displays: type, message, related order/item, and timestamp
- Manager can click "Resolve" to mark an alert as handled
- Resolved alerts are hidden from the active view (but kept in the database)
- **Related Feature**: F5 (Exception Alerts)
- **Priority**: Should Have
- **Estimated Sprint**: Week 6

---

## Backlog Summary

- **Total User Stories**: 11
- **Must Have**: 6 stories (US-01 through US-06)
- **Should Have**: 5 stories (US-07 through US-11)
- **Could Have / Won't Have**: None in MVP

---

*Document version: 1.0 | Created: August 2026 | Author: Prithviraj Abnave (23102B0035)*
