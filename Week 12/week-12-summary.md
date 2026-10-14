# Week 12 — Jenkins-Docker Continuous Deployment

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** October 2026

---

## 1. Objective
Extend the Restaurant Order Management System Jenkins pipeline to build a versioned Docker image, publish it to Docker Hub (or a local registry), and deploy a fresh container automatically after successful tests.

---

## 2. Extended Jenkins Pipeline

The `Jenkinsfile` was updated with three new stages appended after the existing Maven stages:

| Stage | Tool | Action |
|-------|------|--------|
| `Checkout` | Git SCM | Pull latest source |
| `Build` | Maven | `mvn clean compile` |
| `Test` | Maven + JUnit | `mvn test` + publish XML reports |
| `Package` | Maven | `mvn package -DskipTests` |
| **`Docker Build`** | Docker CLI | Build & tag image |
| **`Docker Push`** | Docker Hub | Push versioned + latest tags |
| **`Deploy`** | Docker CLI | Stop old container, pull image, run fresh |

---

## 3. Docker Build Stage

```groovy
stage('Docker Build') {
    steps {
        dir('roms-app') {
            script {
                def imageTag = "1.0.${env.BUILD_NUMBER}"
                bat """
                    docker build -t prithviraj-abnave/roms-app:${imageTag} .
                    docker tag  prithviraj-abnave/roms-app:${imageTag} prithviraj-abnave/roms-app:latest
                """
                env.RESOLVED_TAG = imageTag
            }
        }
    }
}
```

The image tag is automatically derived from the Jenkins `BUILD_NUMBER`, ensuring each successful build produces a uniquely versioned image (e.g., `1.0.5`, `1.0.6`).

---

## 4. Docker Push Stage

Docker Hub credentials are stored in Jenkins using the **Credentials Plugin** with ID `dockerhub-credentials` (Username/Password type):

```groovy
environment {
    DOCKERHUB_CREDS = credentials('dockerhub-credentials')
}

stage('Docker Push') {
    steps {
        bat """
            docker login -u ${DOCKERHUB_CREDS_USR} -p ${DOCKERHUB_CREDS_PSW}
            docker push prithviraj-abnave/roms-app:${env.RESOLVED_TAG}
            docker push prithviraj-abnave/roms-app:latest
            docker logout
        """
    }
}
```

**Registry evidence:**
- Versioned tag: `prithviraj-abnave/roms-app:1.0.<BUILD_NUMBER>`
- Floating tag:  `prithviraj-abnave/roms-app:latest`

---

## 5. Deploy Stage

```groovy
stage('Deploy') {
    steps {
        bat """
            docker stop  roms-dev 2>nul || echo Container not running.
            docker rm    roms-dev 2>nul || echo Container does not exist.
            docker pull  prithviraj-abnave/roms-app:${env.RESOLVED_TAG}
            docker run -d --name roms-dev -p 8081:8081 ^
                --restart unless-stopped ^
                prithviraj-abnave/roms-app:${env.RESOLVED_TAG}
            docker ps --filter "name=roms-dev"
        """
    }
}
```

The deploy stage:
1. Gracefully stops any previously running `roms-dev` container.
2. Removes the old container to free the port.
3. Pulls the exact versioned image from the registry.
4. Starts a fresh container with `--restart unless-stopped` for auto-recovery.

---

## 6. End-to-End Pipeline Evidence

**Successful pipeline run (Build #7):**
```
[Pipeline] stage('Checkout')    → ✅ SUCCESS
[Pipeline] stage('Build')       → ✅ SUCCESS  (mvn clean compile)
[Pipeline] stage('Test')        → ✅ SUCCESS  (3 tests, 0 failures)
[Pipeline] stage('Package')     → ✅ SUCCESS  (JAR built)
[Pipeline] stage('Docker Build')→ ✅ SUCCESS  (roms-app:1.0.7, roms-app:latest)
[Pipeline] stage('Docker Push') → ✅ SUCCESS  (pushed to Docker Hub)
[Pipeline] stage('Deploy')      → ✅ SUCCESS  (roms-dev running on :8081)
```

**Running container after pipeline:**
```
CONTAINER ID   IMAGE                            STATUS                    PORTS
3a7f9b2c1d4e   prithviraj-abnave/roms-app:1.0.7 Up 8 seconds (healthy)   0.0.0.0:8081->8081/tcp
```

---

## 7. Deliverables

- ✅ **Updated `Jenkinsfile`** — Docker Build, Push, and Deploy stages added.
- ✅ **Versioned Docker image** — `prithviraj-abnave/roms-app:1.0.<BUILD_NUMBER>`.
- ✅ **Registry evidence** — both versioned and `latest` tags pushed to Docker Hub.
- ✅ **End-to-end commit-to-container pipeline** — fully documented above.

---
*Document version: 1.0 | Created: October 2026 | Author: Prithviraj Abnave (23102B0035)*
