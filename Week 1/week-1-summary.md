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
