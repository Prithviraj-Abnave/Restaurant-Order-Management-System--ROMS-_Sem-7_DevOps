# Week 10 — Continuous Testing in Jenkins

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** September 2026

---

## 1. Objective
Integrate the Selenium test suite into the Jenkins pipeline. Publish test reports, configure the pipeline to halt deployment upon test failures, and demonstrate failure recovery by fixing a deliberately introduced defect.

## 2. Pipeline Integration
The `Jenkinsfile` was updated with a `Test` stage executing `mvn test`. The `post` directive was configured to always publish JUnit XML reports (`target/surefire-reports/*.xml`).
If the test stage fails, the pipeline halts immediately, preventing the `Package` and `Deploy` stages from executing.

```groovy
stage('Test') {
    steps {
        dir('roms-app') {
            bat 'mvn test'
        }
    }
    post {
        always {
            dir('roms-app') {
                junit 'target/surefire-reports/*.xml'
            }
        }
    }
}
```

## 3. Defect Introduction and Pipeline Failure
A deliberate defect was introduced into the `RomsApplicationSeleniumTests.java` file by un-commenting a failing assertion (`assertEquals("Wrong Title", driver.getTitle())`). 
- **Result:** The Jenkins pipeline was triggered. The test failed, generating a failed JUnit report in Jenkins. The build status was marked as **FAILED**, and deployment did not occur.

## 4. Defect Correction and Pipeline Recovery
The code was corrected:
1. The failing assertion in the Selenium test was removed/commented out.
2. The changes were committed and pushed to the repository.
3. The Jenkins pipeline was triggered automatically.
- **Result:** The test stage passed successfully. The JUnit reports indicated 100% pass rate. The pipeline proceeded to the `Package` and `Deploy` stages, resulting in a **SUCCESS** build status.

## 5. Deliverables
- ✅ Selenium suite integrated into Jenkins pipeline.
- ✅ Jenkins pipeline configuration to stop deployment on test failure.
- ✅ Evidence of failed pipeline due to introduced defect.
- ✅ Defect correction commit and successful pipeline rerun.

---
*Document version: 1.0 | Created: September 2026 | Author: Prithviraj Abnave (23102B0035)*
