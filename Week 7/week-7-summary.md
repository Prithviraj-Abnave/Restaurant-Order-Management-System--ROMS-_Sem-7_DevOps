# Week 7 — Jenkins Installation and Continuous Integration Job

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** September 2026

---

## 1. Objective
Install Jenkins locally, connect it to the project's Git repository, and configure a Continuous Integration (CI) job to automatically compile and verify the Spring Boot codebase.

## 2. Jenkins Setup Details
- **Installation Method:** Local deployment using `jenkins.war`
- **Port:** `8080`
- **Plugins Installed:** Standard suggested plugins (Git, Pipeline, Workspace Cleanup, etc.)
- **Tools Configured:** Java 17 and Maven 3

## 3. CI Job Configuration (Freestyle)
- **Job Name:** `ROMS-CI-Freestyle`
- **Job Type:** Freestyle Project
- **Source Code Management:** Git
  - **Repository URL:** Local file path pointing to the project root
  - **Branch:** `*/main`
- **Build Trigger:** Poll SCM (`* * * * *`)
- **Build Step:** Execute Windows batch command
  ```cmd
  cd roms-app
  mvn clean compile
  ```

## 4. Build Verification
The CI job successfully fetched the code from the `main` branch and executed the Maven build phase without errors.

**Console Output Snippet:**
```text
[INFO] --- compiler:3.13.0:compile (default-compile) @ restaurant-order-management-system ---
[INFO] Recompiling the module because of changed dependency.
[INFO] Compiling 21 source files with javac [debug parameters release 17] to target\classes
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
Finished: SUCCESS
```

## 5. Updated Backlog

| Feature / Task | Status |
|---|---|
| Item Catalogue (CRUD, search, filter) | Done (Week 5) |
| Order Management (Create/Update, Status) | Done (Week 6) |
| Exception Alerts (OOS, stale) | Done (Week 6) |
| Theme Migration (Light Academic) | Done (Week 6) |
| ✅ Jenkins Installation & Setup | Done (Week 7) |
| ✅ Freestyle CI Job Setup | Done (Week 7) |
| 🔲 Pipeline as Code (Jenkinsfile) | Week 8 |
| 🔲 Server Deployment | Week 8 |
| 🔲 Selenium UI Testing | Week 9–10 |
| 🔲 Docker & Containerization | Week 11–12 |
| 🔲 Ansible Provisioning | Week 13–14 |

---
*Document version: 1.0 | Created: September 2026 | Author: Prithviraj Abnave (23102B0035)*
