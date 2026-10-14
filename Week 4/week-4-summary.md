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
