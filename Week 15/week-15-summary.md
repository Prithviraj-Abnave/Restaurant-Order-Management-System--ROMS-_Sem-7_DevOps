# Week 15 — Final End-to-End Release, Documentation and Viva

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** October 2026

---

## 1. Objective
Run the complete Restaurant Order Management System DevOps workflow from Git commit to Jenkins build, Selenium quality gate, Docker deployment and Ansible/Puppet provisioning. Complete technical documentation including architecture, troubleshooting guide, limitations and future enhancement plan. Deliver a final repository, live demonstration, complete report, screenshots/video, presentation and viva.

---

## 2. End-to-End DevOps Workflow Summary

### 2.1 Complete Pipeline Walkthrough

The following describes the full automated DevOps workflow triggered by a single `git push`:

```
Developer Workstation
        │
        │ git commit + git push
        ▼
┌─────────────────────────────────────────────────────────────────┐
│                      GitHub Repository                          │
│   Branch: main  │  Webhook configured to trigger Jenkins       │
└──────────────────────────────┬──────────────────────────────────┘
                               │ Webhook POST
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Jenkins CI/CD Server                       │
│                                                                 │
│  Stage 1: Checkout     ── git checkout from SCM               │
│  Stage 2: Build        ── mvn clean compile                   │
│  Stage 3: Test         ── mvn test (Selenium + JUnit)         │
│                           └─ JUnit report published           │
│                           └─ HALT on failure (quality gate)   │
│  Stage 4: Package      ── mvn package -DskipTests             │
│  Stage 5: Docker Build ── docker build -t roms-app:1.0.x      │
│  Stage 6: Docker Push  ── docker push to Docker Hub           │
│  Stage 7: Deploy       ── docker run (fresh container)        │
└──────────────────────────────┬──────────────────────────────────┘
                               │ Image pushed + Container running
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Docker Hub Registry                            │
│   prithviraj-abnave/roms-app:1.0.x  +  :latest                │
└──────────────────────────────┬──────────────────────────────────┘
                               │ Ansible pulls image + deploys
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│               Target Production Node (VM)                       │
│   Provisioned via Ansible (configure-node.yml)                 │
│   ROMS Docker container running on port 8081                   │
│   systemd service: auto-restart on reboot                      │
│   Health check: /actuator/health → {"status":"UP"}             │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. System Architecture

### 3.1 Application Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                     ROMS — Spring Boot Application               │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────────┐   │
│  │  REST Layer  │  │ Service Layer│  │  Repository Layer   │   │
│  │ (Controllers)│─▶│ (OrderService│─▶│ (Spring Data JPA /  │   │
│  │  /api/menu   │  │  MenuService)│  │  H2 In-Memory DB)   │   │
│  │  /api/orders │  │              │  │                     │   │
│  └──────┬───────┘  └──────────────┘  └─────────────────────┘   │
│         │                                                        │
│  ┌──────▼───────┐                                               │
│  │ Static UI    │                                               │
│  │ (HTML/CSS/JS)│                                               │
│  │  index.html  │                                               │
│  │  orders.html │                                               │
│  │  alerts.html │                                               │
│  └──────────────┘                                               │
└──────────────────────────────────────────────────────────────────┘
```

### 3.2 DevOps Toolchain

| Layer | Tool | Version | Purpose |
|-------|------|---------|---------|
| **SCM** | Git + GitHub | — | Source code versioning, webhooks |
| **Build** | Apache Maven | 3.9.x | Dependency management, compile, package |
| **CI/CD** | Jenkins | 2.x LTS | Automated pipeline orchestration |
| **Testing** | JUnit 5 + Selenium | 5.x / 4.50 | Unit + UI integration tests |
| **Containerisation** | Docker | 26.x | Image build, registry, container runtime |
| **Registry** | Docker Hub | — | Versioned image storage |
| **Configuration Mgmt** | Ansible | 2.17.x | Agentless provisioning + deployment |
| **Runtime** | JRE 17 (Alpine) | 17.x | Spring Boot embedded Tomcat |
| **Database** | H2 (in-memory) | 2.x | Embedded relational DB for dev/test |

---

## 4. Weekly Progress Summary

| Week | Topic | Key Deliverable |
|------|-------|----------------|
| 1 | DevOps Introduction | Project proposal, tool selection |
| 2 | Git & GitHub | Repository setup, branching strategy |
| 3 | Jenkins Setup | Jenkins installed, freestyle job created |
| 6 | Spring Boot App | ROMS application — REST API + H2 DB |
| 7 | Jenkins Pipeline | Declarative Jenkinsfile (Checkout → Deploy) |
| 8 | Parameterised Pipeline | Environment/port parameters added |
| 9 | Selenium Test Design | 3 critical user journey tests written |
| 10 | Jenkins + Selenium | Tests integrated into pipeline; failure demo |
| 11 | Docker Fundamentals | Multi-stage Dockerfile, container lifecycle |
| 12 | Jenkins-Docker CI/CD | Docker Build/Push/Deploy stages in pipeline |
| 13 | Ansible Config Mgmt | Inventory + configure-node.yml playbook |
| 14 | Provisioning & Reliability | 4-play provision+validate playbook, rollback |
| **15** | **Final E2E + Viva** | **Full workflow, this document, presentation** |

---

## 5. Live Demonstration Script

The viva demonstration follows these steps in order:

1. **Show the GitHub repository** — commit history, branch structure, Jenkinsfile.
2. **Make a small code change** — edit a comment, commit, and push to `main`.
3. **Switch to Jenkins dashboard** — observe the webhook-triggered build starting automatically.
4. **Walk through each pipeline stage** — narrate what each stage does.
5. **Show JUnit Test Results** — open the published test report in Jenkins.
6. **Show Docker Hub** — display the newly pushed versioned image tag.
7. **SSH to target VM** — run `docker ps` to show the running container.
8. **Hit the live application** — open `http://192.168.56.101:8081` in browser.
9. **Show Ansible idempotency** — re-run `ansible-playbook provision-and-validate.yml`, confirm `changed=0`.
10. **Demonstrate rollback** — run Play 4 of the Ansible playbook, verify rollback to `1.0.6`.

---

## 6. Troubleshooting Guide

| Problem | Symptom | Resolution |
|---------|---------|------------|
| Jenkins webhook not triggering | Build does not start on `git push` | Check Jenkins URL in GitHub → Settings → Webhooks. Verify firewall allows inbound to Jenkins port. |
| `mvn test` fails in pipeline | Test stage red, `BUILD FAILED` | Check Surefire report. Ensure ChromeDriver is headless (`--headless=new`). Ensure no port conflict on 8081. |
| Docker build fails | `Cannot find mvnw` error | Ensure `.mvnw` has execute permissions: `git update-index --chmod=+x mvnw`. |
| Docker push denied | `unauthorized: authentication required` | Jenkins credential ID must match. Re-enter DockerHub password in Jenkins Credentials. |
| Container exits immediately | `docker ps -a` shows `Exited (1)` | Run `docker logs roms-container` to read Spring Boot startup error. Common cause: port 8081 already in use. |
| Ansible unreachable | `UNREACHABLE! SSH Error` | Verify `ansible_host` IP, check SSH key path, ensure target has `sshd` running and firewall allows port 22. |
| Health check times out | `retries exceeded` in Ansible | Application taking too long to start. Increase `delay` to 15s or `retries` to 12. Check JVM memory limits. |
| H2 Console not accessible | 404 on `/h2-console` | `spring.h2.console.enabled=true` must be in `application.properties`. Only enabled in `dev` profile. |

---

## 7. Known Limitations

1. **H2 In-Memory Database** — All data is lost on container restart. A persistent database (MySQL/PostgreSQL with a Docker volume) would be required for production.
2. **Single-node deployment** — The current architecture deploys to one VM. High availability would require a load balancer and multiple replicas.
3. **No HTTPS** — The application serves HTTP only. TLS termination via Nginx reverse proxy would be needed in production.
4. **Selenium tests require Chrome** — Headless Chrome must be available on the Jenkins agent. CI agents should have Chrome pre-installed or use a Selenium Grid.
5. **Docker Hub rate limiting** — Free Docker Hub accounts are subject to pull rate limits. A private registry (e.g., GitHub Container Registry) would be preferable in production.
6. **Manual Ansible trigger** — Ansible provisioning is triggered manually. Full automation would integrate it as a final Jenkins stage.

---

## 8. Future Enhancement Plan

| Priority | Enhancement | Description |
|----------|------------|-------------|
| 🔴 High | Persistent Database | Replace H2 with MySQL in a Docker volume or managed RDS instance |
| 🔴 High | HTTPS / TLS | Add Nginx reverse proxy with Let's Encrypt certificate |
| 🟡 Medium | Kubernetes Deployment | Migrate from `docker run` to Kubernetes Deployment + Service YAML |
| 🟡 Medium | Ansible in Jenkins | Integrate `ansible-playbook` as a final Jenkins stage for zero-touch deployment |
| 🟡 Medium | Multi-environment promotion | Automate dev → test → prod promotion with approval gates |
| 🟢 Low | Monitoring & Alerting | Add Prometheus metrics endpoint + Grafana dashboard |
| 🟢 Low | Centralised Logging | Integrate with ELK Stack (Elasticsearch, Logstash, Kibana) |
| 🟢 Low | Security Scanning | Add OWASP Dependency-Check and Trivy container scan stages in Jenkins |

---

## 9. Final Repository Structure

```
Restaurant-Order-Management-System/
├── roms-app/                          # Spring Boot Application
│   ├── src/
│   │   ├── main/java/com/roms/        # Controllers, Services, Models, Repos
│   │   ├── main/resources/static/     # index.html, orders.html, alerts.html
│   │   └── test/java/com/roms/        # Selenium UI Tests
│   ├── Dockerfile                     # Multi-stage Docker build (Week 11)
│   ├── .dockerignore                  # Docker build context exclusions
│   ├── Jenkinsfile                    # Full CI/CD pipeline (Weeks 7-12)
│   └── pom.xml                        # Maven project descriptor
│
├── Week 1/  … Week 10/               # Weekly lab summaries (Weeks 1-10)
├── Week 11/week-11-summary.md         # Docker lifecycle
├── Week 12/week-12-summary.md         # Jenkins-Docker CI/CD
├── Week 13/
│   ├── ansible/inventory.ini          # Ansible inventory
│   ├── ansible/configure-node.yml     # Config management playbook
│   ├── ansible/templates/             # Jinja2 systemd template
│   └── week-13-summary.md             # Config mgmt documentation
├── Week 14/
│   ├── ansible/provision-and-validate.yml  # Provisioning + reliability playbook
│   └── week-14-summary.md             # Provisioning documentation
└── Week 15/week-15-summary.md         # This document — final report
```

---

## 10. Deliverables Checklist

- ✅ **Final Repository** — All code, Dockerfile, Jenkinsfile, Ansible playbooks committed and pushed to GitHub.
- ✅ **Live Demonstration** — End-to-end pipeline executed: Git push → Jenkins build → Docker push → Container running.
- ✅ **Complete Report** — This document covering architecture, pipeline, weekly progress, troubleshooting, limitations, and future plan.
- ✅ **Architecture Diagrams** — Application and DevOps toolchain architecture documented.
- ✅ **Screenshots/Video Evidence** — Jenkins dashboard, Docker Hub, running container, Ansible run, application UI.
- ✅ **Presentation** — 15-slide viva presentation covering project overview, each weekly topic, and lessons learned.
- ✅ **Viva Preparation** — Demonstration script (Section 5) rehearsed and ready.

---

## 11. Lessons Learned

1. **Infrastructure as Code is essential** — Manual server configuration is error-prone and unrepeatable. Ansible playbooks eliminate configuration drift.
2. **Quality gates prevent regressions** — Integrating Selenium into the pipeline ensures no broken UI reaches production.
3. **Container immutability simplifies rollback** — Since each build produces a uniquely tagged image, reverting to a previous state is as simple as `docker run old-image:tag`.
4. **Idempotency is a superpower** — Designing Ansible tasks to be idempotent means the playbook can be safely re-run at any time without fear of side effects.
5. **Secrets management matters early** — Storing DockerHub credentials in Jenkins Credentials Store (not in the Jenkinsfile) is a critical security practice that should be established from day one.

---
*Document version: 1.0 | Created: October 2026 | Author: Prithviraj Abnave (23102B0035)*  
*Course: DevOps — SEM 7 | Institution: [Your Institution Name]*
