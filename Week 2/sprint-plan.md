# Sprint Plan — Restaurant Order Management System

> **Methodology**: Scrum-inspired (1 sprint = 1 week)
> **Total Sprints**: 15
> **Team Size**: 1 (Solo developer)

---

## Phase 1 — Planning and Documentation (Weeks 1–3)

### Sprint 1 (Week 1) — Problem Definition and Scope

**Goal**: Define the problem, identify stakeholders, and freeze the MVP scope.

**Deliverables:**
- Problem statement document
- Stakeholder analysis document
- Objectives and constraints document
- MVP scope document (frozen)

**Status**: Complete

---

### Sprint 2 (Week 2) — Agile Planning and DevOps Workflow

**Goal**: Create the product backlog, sprint plan, Definition of Done, and DevOps lifecycle diagram.

**Deliverables:**
- Product backlog with user stories (this document)
- Sprint plan mapping features to weeks
- Definition of Done checklist
- DevOps lifecycle workflow diagram

**Status**: Complete

---

### Sprint 3 (Week 3) — Requirements, Architecture, and Tech Setup

**Goal**: Design the system architecture, define the data model and API list, and set up the local development environment.

**Deliverables:**
- SRS summary
- Use-case diagram
- Architecture diagram (3-tier)
- Data model with ER diagram
- REST API list
- Working local setup with README

**User Stories**: None (infrastructure sprint)

---

## Phase 2 — Version Control and Feature Development (Weeks 4–6)

### Sprint 4 (Week 4) — Git and GitHub Repository Setup

**Goal**: Create the GitHub repository with proper structure, branch policies, and issue templates.

**Deliverables:**
- GitHub repository created with README, .gitignore, issue templates, PR template
- Branch naming convention established (main, develop, feature/*, bugfix/*, release/*)
- Application skeleton committed (Spring Boot starter, empty packages, pom.xml)
- GitHub Issues created for each MVP feature (F1–F5)

**User Stories**: None (infrastructure sprint)

---

### Sprint 5 (Week 5) — Feature 1: Item Catalogue

**Goal**: Implement the full Item Catalogue feature using feature branching and PR workflow.

**Deliverables:**
- Feature branch: feature/item-catalogue
- MenuItem entity, repository, service, controller
- Frontend: Menu management page
- Pull request raised, reviewed, and merged to develop
- Commit log and PR evidence

**User Stories**: US-01, US-02

---

### Sprint 6 (Week 6) — Features 2–5: Orders, Status, Search, Alerts

**Goal**: Complete all remaining MVP features on separate feature branches.

**Deliverables:**
- Feature branch: feature/order-management (F2 + F3)
- Feature branch: feature/search-filter (F4)
- Feature branch: feature/exception-alerts (F5)
- Merge conflict demonstration and resolution
- Release tag: v1.0.0
- All GitHub Issues closed

**User Stories**: US-03, US-04, US-05, US-06, US-07, US-08, US-09, US-10, US-11

---

## Phase 3 — CI/CD Pipeline (Weeks 7–8)

### Sprint 7 (Week 7) — Jenkins Installation and CI Job

**Goal**: Install Jenkins, connect the GitHub repository, and create an automated Maven build job.

**Deliverables:**
- Jenkins LTS installed and configured
- Freestyle build job created (mvn clean package)
- Build trigger set up (Poll SCM or GitHub webhook)
- Build log and archived artifact screenshots

**User Stories**: None (DevOps sprint)

---

### Sprint 8 (Week 8) — Pipeline as Code and Deployment

**Goal**: Create a Jenkinsfile with a multi-stage pipeline and deploy to the embedded Tomcat server.

**Deliverables:**
- Jenkinsfile committed to repository root
- Multi-stage pipeline: Checkout → Build → Test → Package → Deploy
- Parameterized builds (staging / production)
- Pipeline run screenshot (Blue Ocean / Stage View)
- Application running and accessible

**User Stories**: None (DevOps sprint)

---

## Phase 4 — Automated Testing (Weeks 9–10)

### Sprint 9 (Week 9) — Selenium Test Design and Local Execution

**Goal**: Write Selenium WebDriver tests for critical user journeys and run them locally.

**Deliverables:**
- 5 Selenium test cases covering: add menu item, create order, update order status, search menu, exception alert
- Tests run locally via Maven (mvn test)
- Screenshots captured on test failure
- Test report generated

**User Stories**: None (testing sprint)

---

### Sprint 10 (Week 10) — Continuous Testing in Jenkins

**Goal**: Integrate Selenium tests into the Jenkins pipeline as a quality gate.

**Deliverables:**
- Selenium test stage added to Jenkinsfile
- Demonstrate test failure blocking deployment (deliberately break something)
- Fix the defect, rerun pipeline, show green build
- Evidence: failed build log, test report, fix commit, green build

**User Stories**: None (testing sprint)

---

## Phase 5 — Containerization (Weeks 11–12)

### Sprint 11 (Week 11) — Docker Image and Container Lifecycle

**Goal**: Create a Dockerfile, build/run/inspect/stop/restart/remove containers.

**Deliverables:**
- Dockerfile for the Spring Boot application
- docker-compose.yml for app + MySQL multi-container setup
- Docker command log documenting full container lifecycle
- Application running inside a container on port 8080

**User Stories**: None (DevOps sprint)

---

### Sprint 12 (Week 12) — Jenkins-Docker Continuous Deployment

**Goal**: Extend the Jenkins pipeline to build a Docker image, push to registry, and auto-deploy.

**Deliverables:**
- Docker Build and Docker Push stages added to Jenkinsfile
- Image pushed to Docker Hub with build-number tagging
- Auto-deploy: old container removed, new container started
- Evidence: Docker Hub screenshot, Jenkins pipeline run

**User Stories**: None (DevOps sprint)

---

## Phase 6 — Configuration Management (Weeks 13–14)

### Sprint 13 (Week 13) — Ansible Playbook

**Goal**: Write an Ansible playbook to configure a target server for running ROMS.

**Deliverables:**
- Ansible inventory file (inventory.ini)
- Ansible playbook (playbook.yml) covering: JDK install, Docker install, MySQL setup, firewall rules, app user creation, app directory, systemd service
- Playbook runs successfully on target node

**User Stories**: None (DevOps sprint)

---

### Sprint 14 (Week 14) — Provisioning and Reliability

**Goal**: Demonstrate idempotent provisioning, health checks, and rollback capability.

**Deliverables:**
- Provision a clean environment from scratch using the playbook
- Re-run playbook and show idempotency (changed=0)
- Health check endpoint (/api/health) verified by Ansible
- Rollback to previous Docker image version demonstrated

**User Stories**: None (DevOps sprint)

---

## Phase 7 — Final Release (Week 15)

### Sprint 15 (Week 15) — End-to-End Release, Documentation, and Viva

**Goal**: Run the complete pipeline end-to-end, finalize all documentation, present during viva.

**Deliverables:**
- Full pipeline run: Git Commit → Jenkins → Maven Build → Tests → Docker → Deploy → Ansible
- Complete documentation: architecture, API, troubleshooting, limitations, future enhancements
- Final presentation / demo
- All GitHub Issues closed, backlog updated

**User Stories**: None (release sprint)

---

## Sprint Velocity Summary

- **Planning sprints** (no code): Weeks 1, 2, 3
- **Feature development sprints**: Weeks 4, 5, 6
- **DevOps tooling sprints**: Weeks 7, 8, 11, 12, 13, 14
- **Testing sprints**: Weeks 9, 10
- **Release sprint**: Week 15

---

*Document version: 1.0 | Created: August 2026 | Author: Prithviraj Abnave (23102B0035)*
