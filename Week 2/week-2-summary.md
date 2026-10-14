# Week 2 — Agile Planning and DevOps Workflow Design

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** August 2026

---

## 1. Objective
Create the product backlog with user stories, define the sprint plan mapping features to weekly sprints, establish the Definition of Done checklist, and design the DevOps lifecycle workflow diagram.

---

## 2. Product Backlog

Eleven user stories were identified and prioritised using MoSCoW:

| ID | User Story | Feature | Priority | Sprint |
|----|-----------|---------|----------|--------|
| US-01 | Add / Edit / Delete Menu Items | F1 | Must Have | Week 5 |
| US-02 | View Menu Catalogue | F1 | Must Have | Week 5 |
| US-03 | Create a New Order | F2 | Must Have | Week 6 |
| US-04 | Update an Existing Order | F2 | Must Have | Week 6 |
| US-05 | Update Order Status | F3 | Must Have | Week 6 |
| US-06 | View Orders by Status (Kitchen Display) | F3 | Must Have | Week 6 |
| US-07 | Search Menu Items | F4 | Should Have | Week 6 |
| US-08 | Filter and Search Orders | F4 | Should Have | Week 6 |
| US-09 | Out-of-Stock Alert | F5 | Should Have | Week 6 |
| US-10 | Stale Order Alert | F5 | Should Have | Week 6 |
| US-11 | Alert Dashboard | F5 | Should Have | Week 6 |

**Backlog summary:** 11 total user stories | 6 Must Have | 5 Should Have

---

## 3. Sprint Plan

| Sprint (Week) | Phase | Goal |
|---------------|-------|------|
| Week 1 | Planning | Problem definition, MVP scope freeze |
| Week 2 | Planning | Backlog, sprint plan, Definition of Done |
| Week 3 | Planning | SRS, architecture, data model, API design |
| Week 4 | Dev Setup | Git/GitHub repository, Spring Boot skeleton |
| Week 5 | Feature Dev | F1: Item Catalogue (feature branch + PR) |
| Week 6 | Feature Dev | F2–F5: Orders, Status, Search, Alerts + merge conflict |
| Week 7 | CI/CD | Jenkins installation, freestyle build job |
| Week 8 | CI/CD | Jenkinsfile multi-stage pipeline + deployment |
| Week 9 | Testing | Selenium test design and local execution |
| Week 10 | Testing | Selenium integrated into Jenkins (quality gate) |
| Week 11 | Container | Dockerfile, container lifecycle |
| Week 12 | Container | Jenkins-Docker continuous deployment |
| Week 13 | Config Mgmt | Ansible inventory + configure-node playbook |
| Week 14 | Reliability | Provisioning, idempotency, health check, rollback |
| Week 15 | Release | End-to-end pipeline, final docs, viva |

---

## 4. Definition of Done

A user story / sprint is considered **Done** only when all of the following are satisfied:

**Code Level:**
- Compiles without errors; follows naming conventions; no hardcoded values; committed with a meaningful message (`type(scope): subject`)

**Testing Level:**
- Unit tests written; `mvn test` returns BUILD SUCCESS; manual browser testing confirms acceptance criteria

**Integration Level:**
- Feature branch merged to `develop` via Pull Request; no remaining merge conflicts

**Documentation Level:**
- New API endpoints documented; README updated; weekly deliverable docs completed

**DevOps Level (from Week 7 onward):**
- Jenkins pipeline green; Selenium tests pass; Docker image builds; Ansible playbook succeeds

**Deployment Level:**
- Application accessible at `http://localhost:8081`; no regressions in existing features

**Quick Check:** Does it work? Is it tested? Is it committed? Is it merged? Is it documented? Is it deployable? → If yes to all: **Done**.

---

## 5. DevOps Lifecycle Diagram

```
Plan → Code → Build → Test → Release → Deploy → Operate → Monitor
  │       │       │       │        │        │        │        │
Week    Week    Week    Week    Week    Week    Week    Week
1-3    4-6     7-8     9-10    11-12   11-12   13-14   15
```

Tools per phase:
- **Plan:** GitHub Issues, Sprint Plan
- **Code:** VS Code, Git, GitHub (PRs, branches)
- **Build:** Maven (`mvn clean package`)
- **Test:** JUnit 5, Selenium WebDriver
- **Release:** Jenkins Pipeline, Docker Hub tags
- **Deploy:** Docker (`docker run`), Jenkins Deploy stage
- **Operate:** Ansible (systemd service, provisioning)
- **Monitor:** `/actuator/health`, Exception Alerts dashboard

---

## 6. Deliverables

- ✅ Product backlog with 11 user stories (`product-backlog.md`)
- ✅ Sprint plan mapping all 15 weeks (`sprint-plan.md`)
- ✅ Definition of Done checklist (`definition-of-done.md`)
- ✅ DevOps lifecycle workflow diagram (documented above)

---
*Document version: 1.0 | Created: August 2026 | Author: Prithviraj Abnave (23102B0035)*
