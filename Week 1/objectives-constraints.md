# Objectives, Constraints and Success Criteria — Restaurant Order Management System

---

## 1. Project Objectives

### 1.1 Primary Objectives

- **O1** — Build a functional web-based Restaurant Order Management System (MVP) covering 5 core features (Application)
- **O2** — Implement a complete CI/CD pipeline from source code commit to automated deployment (DevOps)
- **O3** — Demonstrate version control best practices using Git and GitHub — branching, PRs, conflict resolution, tagging (Version Control)
- **O4** — Automate build, test, and deployment using Jenkins Pipeline as Code (Continuous Integration)
- **O5** — Write and integrate Selenium WebDriver tests as a quality gate in the pipeline (Continuous Testing)
- **O6** — Containerize the application using Docker and automate image build/push/deploy (Containerization)
- **O7** — Automate server provisioning and configuration using Ansible (Configuration Management)

### 1.2 Secondary Objectives

- **O8** — Produce comprehensive technical documentation and a troubleshooting guide (Documentation)
- **O9** — Demonstrate idempotency in configuration management and rollback/recovery capability (Reliability)
- **O10** — Follow Agile methodology with a product backlog, sprint plan, and Definition of Done (Process)

---

## 2. Constraints

### 2.1 Timeline Constraints

- **Project duration** — 15 weeks (fixed, academic calendar)
- **Weekly deliverables** — Each week has specific deliverables that must be completed in sequence
- **Viva / Demo** — Final demonstration in Week 15; system must be fully operational

### 2.2 Technical Constraints

- **Backend** — Java 17+ (Spring Boot)
- **Frontend** — HTML5 + CSS3 + Vanilla JavaScript
- **Build tool** — Maven 3.9+
- **Database** — MySQL 8
- **CI/CD tool** — Jenkins (mandatory as per curriculum)
- **Testing** — Selenium WebDriver (mandatory)
- **Configuration management** — Ansible (selected over Puppet)
- **Containerization** — Docker (mandatory)

### 2.3 Resource Constraints

- **Team size** — Solo developer; all roles handled by one person
- **Infrastructure** — Local machine only (initially); VM may be added later
- **Budget** — ₹0; all tools must be free / open-source
- **Hardware** — Single development machine (Windows OS)

### 2.4 Scope Constraints

- **MVP only** — No payment processing, customer-facing app, multi-restaurant support, or analytics dashboards
- **No mobile app** — Web-only; responsive design for tablet use is acceptable
- **Single restaurant** — No multi-tenancy
- **Local network** — Not exposed to the public internet in MVP

---

## 3. Measurable Success Criteria

### 3.1 Application Success Criteria

- **SC1** — All 5 MVP features functional → Target: 5/5 features working
- **SC2** — Menu item CRUD operations (add, edit, delete, list) → All 4 operations successful
- **SC3** — Order creation and status tracking through full lifecycle → Placed → Preparing → Ready → Served → Closed
- **SC4** — Search by name, filter by status/date → Results returned in < 2 seconds
- **SC5** — Exception alerts for out-of-stock and stale orders → Alerts generated within 1 minute

### 3.2 DevOps Pipeline Success Criteria

- **SC6** — Git workflow: Branches, PRs, merges, tags, conflict resolution all demonstrated with evidence
- **SC7** — Jenkins CI build: Automated build triggered on commit/push and succeeds consistently
- **SC8** — Selenium test suite: At least 3 test cases passing; failed tests block deployment
- **SC9** — Docker containerization: App runs in container and serves on mapped port
- **SC10** — End-to-end pipeline: Commit → Build → Test → Docker → Deploy completes in < 10 minutes
- **SC11** — Ansible provisioning: Playbook runs on target node with idempotent execution (changed=0 on rerun)
- **SC12** — Rollback capability: Previous version serves successfully after rollback

### 3.3 Documentation Success Criteria

- **SC13** — All 15 weekly deliverables submitted (15/15 completed)
- **SC14** — Technical documentation complete: Architecture, API, troubleshooting, limitations docs all present
- **SC15** — Live demonstration: Full pipeline demonstrated without errors during viva

---

## 4. Assumptions

1. The local development machine has sufficient resources (8GB+ RAM, 50GB+ free disk) to run Jenkins, Docker, MySQL, and the application simultaneously.
2. Internet connectivity is available for downloading dependencies (Maven, Docker images).
3. The student has administrative access to install software on the development machine.
4. GitHub is accessible without firewall restrictions.
5. Docker Desktop for Windows is compatible with the development machine.

---

## 5. Risks and Mitigations

- **R1 — Local machine resource exhaustion (RAM/CPU)**
  - Probability: Medium | Impact: High
  - Mitigation: Use lightweight Docker images; stop unused containers; consider cloud VM

- **R2 — Jenkins + Docker + MySQL running simultaneously causes conflicts**
  - Probability: Medium | Impact: Medium
  - Mitigation: Use docker-compose to manage port allocation; document port map

- **R3 — Selenium tests flaky due to timing issues**
  - Probability: High | Impact: Medium
  - Mitigation: Use explicit waits (WebDriverWait); add retry logic

- **R4 — Week 15 crunch — insufficient time for documentation**
  - Probability: Medium | Impact: High
  - Mitigation: Start documentation from Week 1; update incrementally

- **R5 — Scope creep beyond frozen MVP**
  - Probability: Medium | Impact: High
  - Mitigation: Strictly follow frozen MVP scope (F1–F5 only)

- **R6 — Single point of failure (solo developer)**
  - Probability: High | Impact: High
  - Mitigation: Maintain regular backups on GitHub; follow incremental commits

---

*Document version: 1.0 | Created: August 2026 | Author: Prithviraj Abnave (23102B0035)*
