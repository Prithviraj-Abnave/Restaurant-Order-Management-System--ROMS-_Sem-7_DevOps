# Week 8 — Pipeline as Code and Server Deployment

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** September 2026

---

## 1. Objective
Create a declarative `Jenkinsfile` for the Restaurant Order Management System to automate the checkout, build, test, package, and deploy stages. Deploy the built artifact and parameterize environment settings.

## 2. Pipeline Architecture
- **Agent:** Any available Jenkins agent.
- **Parameters:**
  - `ENVIRONMENT`: Choice parameter (dev, test, prod) to specify the deployment environment.
  - `PORT`: String parameter specifying the port on which the application should run.
- **Environment Variables:** `APP_NAME` defined globally.

## 3. Pipeline Stages
1. **Checkout:** Fetches the source code from the main Git repository branch.
2. **Build:** Runs `mvn clean compile` to ensure the application compiles correctly.
3. **Test:** Runs `mvn test` to execute JUnit tests. Collects reports.
4. **Package:** Runs `mvn package -DskipTests` to package the Spring Boot executable JAR.
5. **Deploy:** Deploys the built JAR to the parameterized environment on the parameterized port.

## 4. Deployment Details
For this assignment, the Spring Boot embedded Tomcat server was utilized. The deployment stage dynamically executes:
```sh
java -Dserver.port=${PORT} -jar target/${APP_NAME}-0.0.1-SNAPSHOT.jar --spring.profiles.active=${ENVIRONMENT} &
```
This mimics a deployment to a web server (Tomcat/Nginx) configured by environment profiles.

## 5. Deliverables
- ✅ `Jenkinsfile` committed to the repository root.
- ✅ Parameterized CI/CD pipeline executing successfully in Jenkins.
- ✅ Application deployed successfully to the configured port.

---
*Document version: 1.0 | Created: September 2026 | Author: Prithviraj Abnave (23102B0035)*
