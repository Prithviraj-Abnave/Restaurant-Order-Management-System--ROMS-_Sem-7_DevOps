# Problem Statement — Restaurant Order Management System

---

## 1. Background

In the Indian food service industry, a large number of small-to-mid-sized restaurants (dine-in, quick-service and cloud kitchens) still rely on **manual, paper-based workflows** for taking orders, tracking their status, and managing menu items. Even establishments that have adopted basic POS terminals often lack a unified digital system that connects the front-of-house (waitstaff, cashier) with the back-of-house (kitchen) in real time.

This manual approach introduces several recurring problems:

- **Order mis-communication** — Handwritten chits are misread by the kitchen, leading to wrong dishes and customer complaints.
- **No real-time status visibility** — Waiters must physically walk to the kitchen to check if an order is ready, wasting time and causing delays.
- **Stock / availability blind spots** — Out-of-stock items are discovered only after a customer has ordered, resulting in embarrassment and cancellations.
- **Slow search and reporting** — Finding past orders, filtering by date or status, and generating end-of-day summaries requires manual ledger review.
- **No exception handling** — Stale orders (sitting in "Preparing" for 30+ minutes) and failed payments go unnoticed until a customer escalates.
- **Inconsistent menu management** — Price changes, new items, and seasonal removals are communicated verbally, leading to outdated menus being shown to customers.

---

## 2. Real-Time Need

The COVID-19 pandemic and post-pandemic recovery accelerated the demand for **contactless, digital ordering** even within dine-in restaurants. Customers now expect to see live order progress, receive accurate ETAs, and trust that what is on the menu is actually available.

At the same time, restaurant owners need **operational efficiency**: fewer order errors, faster table turnover, proactive alerts when things go wrong, and data they can act on (popular items, peak hours, average order value).

A lightweight, web-based **Restaurant Order Management System (ROMS)** addresses both sets of needs with minimal hardware investment — a browser on any device is sufficient.

---

## 3. Problem Statement

> **There is no affordable, lightweight, open-source web application that enables small-to-mid-sized restaurants to digitally manage their menu catalogue, create and update dine-in orders in real time, track order status from placement to serving, search and filter historical orders, and receive proactive alerts for operational exceptions — all deployed through a modern DevOps pipeline that ensures continuous integration, testing, and delivery.**

This project aims to build such a system as a **Minimum Viable Product (MVP)** over 15 weeks, with equal emphasis on the **application functionality** and the **end-to-end CI/CD pipeline** (Git, Jenkins, Selenium, Docker, Ansible) that delivers it.

---

## 4. Target Users

- **Restaurant Owner / Manager** — Business administration. Needs menu management, order oversight, exception alerts, and reporting.
- **Waiter / Front-of-House Staff** — Order entry. Needs quick order creation, status checking, and table management.
- **Kitchen Staff / Chef** — Order fulfilment. Needs to receive orders and update status (Preparing → Ready).
- **DevOps Engineer (Student)** — System delivery. Needs to build, test, deploy and maintain the system through CI/CD.

---

## 5. Existing Pain Points Summary

```
Manual Order Taking          →  Errors, delays, illegible handwriting
No Digital Status Tracking   →  Physical trips to kitchen, customer wait
No Stock Awareness           →  Embarrassing out-of-stock situations
Paper-Based Records          →  Difficult search, no filters, no analytics
No Exception Alerts          →  Stale orders and issues go unnoticed
Verbal Menu Updates          →  Inconsistent pricing and availability
```

---

## 6. Why This Project?

This project is designed for the **DevOps (SEM 7)** curriculum. It provides a realistic, multi-layered application that exercises every phase of the DevOps lifecycle:

1. **Plan** — Agile backlog, user stories, sprint planning
2. **Code** — Java (Spring Boot) web application with HTML/CSS/JS frontend
3. **Build** — Maven for CI integration
4. **Test** — Selenium WebDriver automated UI tests
5. **Release** — Jenkins Pipeline as Code (Jenkinsfile)
6. **Deploy** — Docker containerization
7. **Operate** — Ansible configuration management
8. **Monitor** — Health checks, exception alerts

---

*Document version: 1.0 | Created: August 2026 | Author: Prithviraj Abnave (23102B0035)*
