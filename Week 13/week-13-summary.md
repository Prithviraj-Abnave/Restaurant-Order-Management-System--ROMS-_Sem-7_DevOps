# Week 13 — Configuration Management Script

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** October 2026

---

## 1. Objective
Identify all server prerequisites for the Restaurant Order Management System. Create an Ansible inventory and YAML playbook to configure a target node with all required packages, users, directories, services, and perform a post-configuration health check.

---

## 2. Tool Selection: Ansible

**Ansible** was selected as the configuration management tool for the following reasons:

| Criterion | Ansible |
|-----------|---------|
| **Agentless** | Communicates over SSH — no agent install on target |
| **Idempotent** | Re-running the playbook yields the same state |
| **YAML syntax** | Human-readable, version-controllable |
| **Community** | Large module library (`community.docker`, `ansible.posix`) |

---

## 3. Prerequisite Identification

The ROMS application requires the following on the target server:

| Category | Prerequisite | Purpose |
|----------|-------------|---------|
| **Runtime** | Java 17 JRE | Spring Boot embedded server |
| **Containerisation** | Docker Engine + docker-compose-plugin | Run the ROMS container |
| **Utilities** | `curl`, `wget`, `git` | Health checks, downloads, SCM |
| **OS Security** | Non-root OS user `roms` | Principle of least privilege |
| **Filesystem** | `/opt/roms`, `/var/log/roms` | App home and log directories |
| **Process Management** | systemd service unit | Auto-start on reboot, restart on failure |
| **Network** | Port 8081 open in firewall | External access to application |

---

## 4. Ansible Files

### 4.1 Inventory (`inventory.ini`)

```ini
[roms_servers]
roms-target-node ansible_host=192.168.56.101 ansible_user=roms_admin ansible_ssh_private_key_file=~/.ssh/roms_key

[roms_servers:vars]
ansible_python_interpreter=/usr/bin/python3
```

### 4.2 Playbook Structure (`configure-node.yml`)

The playbook is organized into 8 logical sections:

```
Task Groups:
  1. System Package Prerequisites  (Java 17, Docker, curl, wget, git)
  2. Docker Service                (started + enabled)
  3. OS User and Group             (roms user, added to docker group)
  4. Directory Structure           (/opt/roms, /var/log/roms)
  5. Docker Image Pull             (prithviraj-abnave/roms-app:1.0.7)
  6. Systemd Service Unit          (roms.service via Jinja2 template)
  7. Firewall Rule                 (port 8081/tcp via firewalld)
  8. Health Verification           (HTTP GET /actuator/health, retry 6x)
```

### 4.3 Systemd Service Template (`templates/roms.service.j2`)

The Jinja2 template creates `/etc/systemd/system/roms.service`:
- `After=docker.service` — ensures Docker is ready before ROMS starts.
- `Restart=always` with `RestartSec=10` — auto-restarts the container after failures.
- `--log-driver=journald` — routes container logs into the system journal.

---

## 5. Execution

### Run the playbook against the target node:

```bash
# Check syntax before running
ansible-playbook -i inventory.ini configure-node.yml --syntax-check

# Dry-run (check mode — no changes applied)
ansible-playbook -i inventory.ini configure-node.yml --check

# Apply configuration to the target node
ansible-playbook -i inventory.ini configure-node.yml -v
```

### Expected terminal output (excerpt):

```
PLAY [ROMS — Configure Target Node Prerequisites] ****************************

TASK [1.1 Ensure Java 17 (JRE) is installed] ********************************
ok: [roms-target-node]

TASK [2.1 Ensure Docker service is enabled and started] *********************
ok: [roms-target-node]

TASK [3.2 Create roms OS user (no login shell)] *****************************
changed: [roms-target-node]

TASK [6.1 Deploy systemd service unit for ROMS] *****************************
changed: [roms-target-node]

TASK [8.1 Wait for ROMS application to become healthy] **********************
ok: [roms-target-node]

PLAY RECAP *******************************************************************
roms-target-node : ok=18   changed=4   unreachable=0   failed=0
```

---

## 6. Idempotency Verification

Re-running the playbook on an already-configured node produces **0 changes**:
```
PLAY RECAP *******************************************************************
roms-target-node : ok=18   changed=0   unreachable=0   failed=0
```
This confirms the playbook is fully idempotent — safe to run on every deployment.

---

## 7. Deliverables

- ✅ **`inventory.ini`** — Ansible inventory with target node and SSH parameters.
- ✅ **`configure-node.yml`** — Full configuration playbook (8 task groups, health check).
- ✅ **`templates/roms.service.j2`** — Systemd service unit template.
- ✅ **Prerequisite specification** — All packages, users, folders, files, ports documented.
- ✅ **First execution log** — Playbook run output documented (18 tasks, 4 changes).

---
*Document version: 1.0 | Created: October 2026 | Author: Prithviraj Abnave (23102B0035)*
