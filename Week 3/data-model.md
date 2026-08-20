# Data Model — Restaurant Order Management System

---

## 1. Entities

### menu_item

Stores all the dishes/beverages available in the restaurant.

- **id** — Primary key, auto-generated
- **name** — Name of the item (e.g. "Paneer Tikka"), required
- **category** — One of: STARTER, MAIN_COURSE, DESSERT, BEVERAGE
- **price** — Price in INR, must be greater than 0
- **is_available** — Boolean flag, true if the item can be ordered right now
- **created_at** — Timestamp when the item was first added
- **updated_at** — Timestamp of last modification

---

### order_table (named "order_table" because "order" is a reserved SQL keyword)

Stores each customer order placed at a table.

- **id** — Primary key, auto-generated
- **table_number** — Which table this order is for (integer)
- **status** — One of: PLACED, PREPARING, READY, SERVED, CLOSED
- **total_amount** — Sum of (item price × quantity) for all items in this order
- **created_at** — Timestamp when the order was created
- **updated_at** — Timestamp of last status change or modification

---

### order_item

Links menu items to an order. One order can have many items, and one item can appear in many orders.

- **id** — Primary key, auto-generated
- **order_id** — Foreign key → order_table.id (which order this belongs to)
- **menu_item_id** — Foreign key → menu_item.id (which item was ordered)
- **quantity** — How many of this item were ordered (integer, must be >= 1)
- **price_at_order** — The price of the item at the time the order was placed (stored separately because the menu price may change later)

---

### alert

Stores system-generated alerts for operational exceptions.

- **id** — Primary key, auto-generated
- **type** — One of: OUT_OF_STOCK, STALE_ORDER
- **message** — Human-readable description of the alert (e.g. "Paneer Tikka is out of stock")
- **order_id** — Foreign key → order_table.id (nullable, only set for order-related alerts)
- **menu_item_id** — Foreign key → menu_item.id (nullable, only set for item-related alerts)
- **is_resolved** — Boolean flag, true if the manager has marked this alert as handled
- **created_at** — Timestamp when the alert was generated

---

## 2. Relationships

- One **menu_item** can appear in many **order_items** (one-to-many)
- One **order_table** can have many **order_items** (one-to-many)
- One **order_table** can have many **alerts** (one-to-many, optional)
- One **menu_item** can have many **alerts** (one-to-many, optional)

In short:
```
menu_item  ──(1:N)──  order_item  ──(N:1)──  order_table
menu_item  ──(1:N)──  alert
order_table ──(1:N)── alert
```

---

## 3. ER Diagram (draw in Excalidraw)

Draw 4 boxes (entities) with the following connections:

**Box 1: menu_item**
- Fields: id, name, category, price, is_available, created_at, updated_at
- Underline "id" to show it's the primary key

**Box 2: order_table**
- Fields: id, table_number, status, total_amount, created_at, updated_at
- Underline "id"

**Box 3: order_item**
- Fields: id, order_id (FK), menu_item_id (FK), quantity, price_at_order
- Underline "id"
- Mark order_id and menu_item_id as foreign keys

**Box 4: alert**
- Fields: id, type, message, order_id (FK), menu_item_id (FK), is_resolved, created_at
- Underline "id"
- Mark order_id and menu_item_id as foreign keys (both nullable)

**Lines (relationships):**
- menu_item ----(1)-----(N)---- order_item (one menu item can be in many order_items)
- order_table ----(1)-----(N)---- order_item (one order has many order_items)
- order_table ----(1)-----(N)---- alert (one order can trigger many alerts)
- menu_item ----(1)-----(N)---- alert (one item can trigger many alerts)

Save as: er-diagram.png

---

*Document version: 1.0 | Created: August 2026 | Author: Prithviraj Abnave (23102B0035)*
