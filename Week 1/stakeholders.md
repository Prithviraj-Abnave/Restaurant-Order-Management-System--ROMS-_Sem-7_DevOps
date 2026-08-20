# Stakeholder Analysis — Restaurant Order Management System

---

## 1. Stakeholder Register

**S1 — Restaurant Owner / Manager**
- Category: Primary
- Interest Level: High
- Influence Level: High

**S2 — Waiter / Front-of-House Staff**
- Category: Primary
- Interest Level: High
- Influence Level: Medium

**S3 — Kitchen Staff / Chef**
- Category: Primary
- Interest Level: High
- Influence Level: Medium

**S4 — Customer (Dine-in)**
- Category: Secondary
- Interest Level: Medium
- Influence Level: Low

---

## 2. Detailed Stakeholder Profiles

### S1 — Restaurant Owner / Manager

- **Needs**: Digital menu management, real-time order tracking, exception alerts, basic analytics
- **Pain Points**: Relies on verbal communication for menu changes; no visibility into order bottlenecks; cannot identify stale orders
- **Success Criteria**: All menu items digitally managed; order status visible in real time; alerts triggered within 1 minute of exception
- **Expectations from MVP**: A working web dashboard accessible from any browser on the local network

### S2 — Waiter / Front-of-House Staff

- **Needs**: Quick order creation with item selection, easy status checking, minimal training
- **Pain Points**: Paper chits are slow and error-prone; must walk to kitchen to check status
- **Success Criteria**: Order creation in < 30 seconds; live status visible on their screen
- **Expectations from MVP**: Simple, intuitive UI that works on tablets and desktops

### S3 — Kitchen Staff / Chef

- **Needs**: Incoming order list in chronological order, ability to update status
- **Pain Points**: Paper chits pile up and get lost; no way to signal "Ready" digitally
- **Success Criteria**: New orders appear instantly; status update requires a single click
- **Expectations from MVP**: A kitchen display/page showing pending and in-progress orders

### S4 — Customer (Dine-in)

- **Needs**: Accurate orders, reasonable wait times, correct billing
- **Pain Points**: Wrong dishes delivered, no ETA, out-of-stock surprises
- **Success Criteria**: Fewer order errors, faster service
- **Expectations from MVP**: Indirect beneficiary — does not interact with the system directly in MVP

---

## 3. Stakeholder Communication Plan

- **Restaurant Owner** — Requirements review meeting at Weeks 1, 3, 6, 15. Content: Feature validation and feedback.
- **Waiters / Kitchen Staff** — UI walkthrough + feedback at Weeks 5, 6, 9. Content: Usability testing.

---

## 4. RACI Matrix (System Operations)

> R = Responsible, A = Accountable, C = Consulted, I = Informed

**Managing Menu & Stock**
- Manager (S1): R, A
- Waiter (S2): I
- Kitchen (S3): C

**Creating & Updating Orders**
- Waiter (S2): R, A
- Kitchen (S3): I
- Manager (S1): I

**Preparing & Completing Orders**
- Kitchen (S3): R, A
- Waiter (S2): I
- Manager (S1): I

**Resolving Exception Alerts**
- Manager (S1): R, A
- Waiter (S2): C
- Kitchen (S3): C

---

*Document version: 1.1 | Created: August 2026*
