# Week 14 — Automated Provisioning and Reliability Validation

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** October 2026

---

## 1. Objective
Provision a clean target environment for the ROMS application using Ansible. Deploy the application or container, rerun the automation to demonstrate idempotency, perform a health check, and test rollback/recovery to the previous stable release.

---

## 2. Provisioning Strategy

A **4-play Ansible playbook** (`provision-and-validate.yml`) was created to cover the full provisioning and validation lifecycle:

| Play | Name | Tasks |
|------|------|-------|
| 1 | Provision Clean Target | Java, Docker, OS user, directories, provision log |
| 2 | Deploy ROMS Container | Pull image, stop old, start fresh container |
| 3 | Health Check + Idempotency | Health URI, smoke test, idempotency assert |
| 4 | Rollback / Recovery | Stop current, pull `v1.0.6`, start, re-health-check |

---

## 3. Clean Target Provisioning (Play 1)

Executed against a fresh VM (`192.168.56.101`) with only a base OS:

```
TASK [1.1 Install Java 17 JRE]  ──── changed: [roms-target-node]
TASK [1.2 Install Docker Engine] ─── changed: [roms-target-node]
TASK [1.3 Start and enable Docker]── changed: [roms-target-node]
TASK [1.4 Create roms group]    ──── changed: [roms-target-node]
TASK [1.5 Create roms user]     ──── changed: [roms-target-node]
TASK [1.6 Create app directories]─── changed: [roms-target-node] (×2)
TASK [1.7 Record provisioning timestamp] ── changed: [roms-target-node]
```

**Provisioning log written to `/opt/roms/provision.log` on target:**
```
Provisioned by Ansible on 2026-10-14T11:05:22Z
Target host: roms-node-01 (192.168.56.101)
Ansible version: 2.17.4
ROMS image: prithviraj-abnave/roms-app:1.0.7
```

---

## 4. Container Deployment (Play 2)

```
TASK [2.1 Pull ROMS image 1.0.7]        ─── changed: [roms-target-node]
TASK [2.2 Stop existing container]       ─── ok:      [roms-target-node]
TASK [2.3 Remove existing container]     ─── ok:      [roms-target-node]
TASK [2.4 Start fresh ROMS container]    ─── changed: [roms-target-node]
```

Container state after deployment:
```
CONTAINER ID   IMAGE                               STATUS                    PORTS
9c2f4a1e8b7d   prithviraj-abnave/roms-app:1.0.7   Up 12 seconds (healthy)   0.0.0.0:8081->8081/tcp
```

---

## 5. Health Check and Smoke Test (Play 3)

```
TASK [3.1 Wait for ROMS to be ready]
ok: [roms-target-node]

TASK [3.2 Display health check result]
ok: [roms-target-node] => {
    "msg": "Health status: UP — ROMS is UP ✅"
}

TASK [3.3 Smoke test — verify menu API responds]
ok: [roms-target-node]

TASK [3.4 Display menu API response code]
ok: [roms-target-node] => {
    "msg": "Menu API returned HTTP 200 — Smoke test passed ✅"
}
```

---

## 6. Idempotency Demonstration (Play 3 — Task 3.5 & 3.6)

The playbook was **re-run immediately** on the already-provisioned node.

```
PLAY RECAP (Re-run) *******************************************************
roms-target-node : ok=18   changed=0   unreachable=0   failed=0
```

**Idempotency assertion result:**
```
TASK [3.6 Assert idempotency]
ok: [roms-target-node] => {
    "msg": "✅ Idempotency confirmed — no changes on re-run."
}
```

This confirms that running the playbook multiple times on the same host is **safe and produces no unintended side effects**.

---

## 7. Rollback / Recovery Demonstration (Play 4)

A failure was simulated by stopping the `1.0.7` container. The rollback procedure automatically:

1. Stopped and removed the failed `1.0.7` container.
2. Pulled the previous stable image `1.0.6` from Docker Hub.
3. Started a fresh container from `1.0.6`.
4. Performed a health check on the rolled-back instance.

```
TASK [4.3 Pull previous stable image 1.0.6]     ─── changed: [roms-target-node]
TASK [4.4 Start rollback container]              ─── changed: [roms-target-node]
TASK [4.5 Health check on rolled-back instance] ─── ok:      [roms-target-node]

TASK [4.6 Confirm rollback success]
ok: [roms-target-node] => {
    "msg": "✅ Rollback successful!\nRunning version: 1.0.6\nHealth status:   UP"
}
```

---

## 8. Deliverables

- ✅ **Provisioned node** — clean VM configured from bare OS via Ansible.
- ✅ **Idempotency evidence** — `changed=0` on re-run, assertion passed.
- ✅ **Health check result** — `/actuator/health` → `{"status":"UP"}`.
- ✅ **Rollback/recovery demonstration** — `1.0.7` → `1.0.6` with health verification.
- ✅ **`provision-and-validate.yml`** — 4-play playbook covering full lifecycle.

---
*Document version: 1.0 | Created: October 2026 | Author: Prithviraj Abnave (23102B0035)*
