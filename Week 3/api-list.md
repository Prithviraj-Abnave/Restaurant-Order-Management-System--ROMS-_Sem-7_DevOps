# REST API List — Restaurant Order Management System

---

## Base URL

```
http://localhost:8080/api
```

---

## 1. Menu Item Endpoints

### GET /api/menu-items

- **Description**: Get all menu items. Supports optional query parameters for searching and filtering.
- **Query Parameters**:
  - search (optional) — Search by item name, partial match (e.g. ?search=paneer)
  - category (optional) — Filter by category (e.g. ?category=STARTER)
  - available (optional) — Filter by availability (e.g. ?available=true)
- **Response**: List of menu item objects
- **Status Codes**: 200 OK

### POST /api/menu-items

- **Description**: Add a new menu item to the catalogue.
- **Request Body**:
  - name (string, required) — Name of the item
  - category (string, required) — One of: STARTER, MAIN_COURSE, DESSERT, BEVERAGE
  - price (number, required) — Price in INR, must be > 0
  - isAvailable (boolean, optional, defaults to true)
- **Response**: The created menu item object with generated ID
- **Status Codes**: 201 Created, 400 Bad Request (validation errors)

### PUT /api/menu-items/{id}

- **Description**: Update an existing menu item.
- **Path Parameter**: id — The menu item ID
- **Request Body**: Same fields as POST (all optional, only provided fields are updated)
- **Response**: The updated menu item object
- **Status Codes**: 200 OK, 404 Not Found, 400 Bad Request

### DELETE /api/menu-items/{id}

- **Description**: Soft-delete a menu item (marks it as unavailable/hidden, does not remove from DB).
- **Path Parameter**: id — The menu item ID
- **Response**: No content
- **Status Codes**: 204 No Content, 404 Not Found

---

## 2. Order Endpoints

### GET /api/orders

- **Description**: Get all orders. Supports optional query parameters for filtering.
- **Query Parameters**:
  - status (optional) — Filter by status (e.g. ?status=PLACED)
  - fromDate (optional) — Filter orders created on or after this date (e.g. ?fromDate=2026-08-01)
  - toDate (optional) — Filter orders created on or before this date
  - tableNumber (optional) — Filter by table number
- **Response**: List of order objects (each includes its order items)
- **Status Codes**: 200 OK

### POST /api/orders

- **Description**: Create a new order.
- **Request Body**:
  - tableNumber (integer, required) — The table placing the order
  - items (list, required) — Each item has:
    - menuItemId (integer, required) — ID of the menu item
    - quantity (integer, required) — Must be >= 1
- **Response**: The created order object with status "PLACED", calculated total, and timestamp
- **Status Codes**: 201 Created, 400 Bad Request (invalid items, out-of-stock item)

### PUT /api/orders/{id}

- **Description**: Update an existing order (add/remove items, change quantities). Only allowed when status is "PLACED" or "PREPARING".
- **Path Parameter**: id — The order ID
- **Request Body**:
  - items (list, required) — Updated list of items with menuItemId and quantity
- **Response**: The updated order object with recalculated total
- **Status Codes**: 200 OK, 404 Not Found, 400 Bad Request (order not in modifiable status)

### PATCH /api/orders/{id}/status

- **Description**: Change the status of an order. Only forward transitions are allowed.
- **Path Parameter**: id — The order ID
- **Request Body**:
  - status (string, required) — The new status (PREPARING, READY, SERVED, or CLOSED)
- **Response**: The updated order object
- **Status Codes**: 200 OK, 404 Not Found, 400 Bad Request (invalid transition)

**Valid Transitions:**
```
PLACED → PREPARING → READY → SERVED → CLOSED
```
Any other transition (e.g. READY → PLACED) returns 400 Bad Request.

---

## 3. Alert Endpoints

### GET /api/alerts

- **Description**: Get all active (unresolved) alerts, sorted by creation time (newest first).
- **Response**: List of alert objects
- **Status Codes**: 200 OK

### PATCH /api/alerts/{id}/resolve

- **Description**: Mark an alert as resolved.
- **Path Parameter**: id — The alert ID
- **Response**: The updated alert object with is_resolved = true
- **Status Codes**: 200 OK, 404 Not Found

---

## 4. Health Check Endpoint (for DevOps pipeline)

### GET /api/health

- **Description**: Returns a simple health status. Used by Jenkins, Docker, and Ansible to verify the app is running.
- **Response**: A JSON object with status "UP"
- **Status Codes**: 200 OK

---

*Document version: 1.0 | Created: August 2026 | Author: Prithviraj Abnave (23102B0035)*
