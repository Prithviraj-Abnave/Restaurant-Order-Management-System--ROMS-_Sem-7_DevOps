# Diagram Descriptions — Draw These in Excalidraw

---

## Diagram 1: Use-Case Diagram

Save as: use-case-diagram.png

**Actors (stick figures on the left and right sides):**
- Manager (left side)
- Waiter (left side)
- Kitchen Staff (right side)
- System (right side, drawn as a box instead of stick figure)

**System boundary (large rectangle in the center):**
- Label it "ROMS — Restaurant Order Management System"

**Use cases (ovals inside the rectangle):**

Connected to Manager:
- Add / Edit / Delete Menu Item
- View All Orders
- Search & Filter Orders
- View Alert Dashboard
- Resolve Alert

Connected to Waiter:
- View Menu Catalogue
- Create Order
- Update Order
- Check Order Status

Connected to Kitchen Staff:
- View Incoming Orders
- Update Order Status (Placed → Preparing → Ready)

Connected to System (automated):
- Generate Out-of-Stock Alert
- Generate Stale Order Alert

**Shared use cases (connected to multiple actors):**
- "View Menu Catalogue" — connected to both Manager and Waiter
- "Check Order Status" — connected to both Waiter and Kitchen Staff

Draw lines from each actor to their use cases. No arrows needed, just plain lines.

---

## Diagram 2: Architecture Diagram (3-Tier)

Save as: architecture-diagram.png

Draw 3 horizontal layers stacked on top of each other:

**Top Layer — Presentation (Client)**
- Label: "Browser (HTML + CSS + JS)"
- Subtitle: "Menu Page, Order Page, Kitchen Display, Alert Dashboard"
- Note: "Runs on any device with a browser"

**Middle Layer — Application (Server)**
- Label: "Spring Boot REST API (Java 17)"
- Subtitle: "Controllers → Services → Repositories"
- Inside, show these sub-boxes in a row:
  - MenuItemController
  - OrderController
  - AlertController
- Below them: "Embedded Tomcat (port 8080)"
- Note: "Runs on localhost or inside Docker"

**Bottom Layer — Data**
- Label: "MySQL 8 Database"
- Subtitle: "Tables: menu_item, order_table, order_item, alert"
- Note: "Port 3306"

**Arrows between layers:**
- Browser → Spring Boot: labeled "HTTP / REST (JSON)"
- Spring Boot → MySQL: labeled "JDBC / JPA"

**Optional: DevOps sidebar on the right**
- A vertical column showing: Git → Jenkins → Docker → Ansible
- Arrow from Jenkins pointing to the Spring Boot layer labeled "CI/CD"
- Arrow from Docker wrapping around the middle + bottom layers labeled "Containerized"

---

*These are just descriptions. Draw them in Excalidraw and save as PNG files in the Week 3 folder.*
