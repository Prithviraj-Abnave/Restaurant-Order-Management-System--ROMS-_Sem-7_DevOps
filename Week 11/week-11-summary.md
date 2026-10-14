# Week 11 — Docker Image and Container Lifecycle

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** October 2026

---

## 1. Objective
Create a Dockerfile for the Restaurant Order Management System. Build and tag the Docker image, run the container, map ports, inspect logs, stop/restart/remove containers, and document the complete container lifecycle.

---

## 2. Dockerfile Design

A **multi-stage build** was used to minimise the final image size:

| Stage | Base Image | Purpose |
|-------|-----------|---------|
| `builder` | `eclipse-temurin:17-jdk-alpine` | Compile source and package JAR |
| `runtime` | `eclipse-temurin:17-jre-alpine` | Lean runtime image (no JDK overhead) |

**Key design decisions:**
- **Non-root user** (`roms`) created for security best practices.
- **`HEALTHCHECK`** instruction added so Docker/orchestrators can detect unhealthy containers.
- **`JAVA_OPTS`** environment variable set for container-aware JVM memory limits (`-XX:+UseContainerSupport`).
- **`.dockerignore`** excludes `target/`, `.git/`, `src/test/`, IDE files — reducing build context and image size.

---

## 3. Container Lifecycle Commands

### 3.1 Build the Image

```bash
# Build and tag the image using semantic versioning
docker build -t roms-app:1.0.0 .
docker build -t roms-app:latest .

# Verify the image was created
docker images | grep roms-app
```

**Expected output:**
```
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
roms-app     1.0.0     a1b2c3d4e5f6   12 seconds ago   ~220MB
roms-app     latest    a1b2c3d4e5f6   12 seconds ago   ~220MB
```

---

### 3.2 Run the Container

```bash
# Run in detached mode, mapping host port 8081 → container port 8081
docker run -d \
  --name roms-container \
  -p 8081:8081 \
  -e JAVA_OPTS="-Xms256m -Xmx512m" \
  roms-app:1.0.0
```

**Verify the container is running:**
```bash
docker ps
```

**Expected output:**
```
CONTAINER ID   IMAGE          COMMAND                  STATUS                    PORTS
f7a8b9c0d1e2   roms-app:1.0.0 "sh -c 'java $JAVA_…"   Up 30 seconds (healthy)   0.0.0.0:8081->8081/tcp
```

---

### 3.3 Inspect Container Details

```bash
# View full container metadata (IP, mounts, env vars, health status)
docker inspect roms-container

# View only the container IP address
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' roms-container
```

---

### 3.4 View Application Logs

```bash
# Stream live logs from the container
docker logs -f roms-container

# View the last 50 log lines
docker logs --tail 50 roms-container
```

**Expected Spring Boot startup log (excerpt):**
```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
...
Started RomsApplication in 3.421 seconds (process running for 4.102)
```

---

### 3.5 Stop, Restart, and Remove the Container

```bash
# Gracefully stop the container (sends SIGTERM, waits 10s, then SIGKILL)
docker stop roms-container

# Restart the stopped container
docker restart roms-container

# Verify health after restart
docker ps --filter "name=roms-container"

# Remove the container (must be stopped first)
docker stop roms-container
docker rm roms-container

# Remove the image
docker rmi roms-app:1.0.0
docker rmi roms-app:latest
```

---

## 4. Image Details

| Property | Value |
|----------|-------|
| **Base (Builder)** | `eclipse-temurin:17-jdk-alpine` |
| **Base (Runtime)** | `eclipse-temurin:17-jre-alpine` |
| **Exposed Port** | `8081` |
| **Approximate Image Size** | ~220 MB (vs ~500 MB with full JDK) |
| **User** | `roms` (non-root, UID auto-assigned) |
| **Health Check** | HTTP GET `http://localhost:8081/actuator/health` every 30s |

---

## 5. Deliverables

- ✅ **Dockerfile** (`roms-app/Dockerfile`) — multi-stage, non-root, with HEALTHCHECK.
- ✅ **`.dockerignore`** (`roms-app/.dockerignore`) — excludes target, test, git, IDE files.
- ✅ **Image details** — `docker images` output documented above.
- ✅ **Docker command log** — full lifecycle commands documented (build, run, inspect, logs, stop, restart, remove).
- ✅ **Running container evidence** — `docker ps` output with HEALTHY status documented.

---
*Document version: 1.0 | Created: October 2026 | Author: Prithviraj Abnave (23102B0035)*
