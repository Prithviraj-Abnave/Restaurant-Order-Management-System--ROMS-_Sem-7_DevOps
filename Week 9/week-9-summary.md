# Week 9 — Selenium Test Design and Local Execution

**Student:** Prithviraj Abnave (23102B0035)  
**Subject:** DevOps — SEM 7  
**Date:** September 2026

---

## 1. Objective
Design automated UI test cases for the Restaurant Order Management System using Selenium WebDriver. Identify critical user journeys, write tests with assertions, and execute them locally via Maven.

## 2. Test Plan: Critical User Journeys
The following three core business journeys were identified for automation:

1. **Homepage / Menu Catalogue Initialization**
   - **Action:** Navigate to the root URL (`/`).
   - **Assertion:** Verify the page title contains "ROMS" and the main header renders "Menu".
2. **Orders Dashboard Validation**
   - **Action:** Navigate to the `/orders.html` page.
   - **Assertion:** Verify the title confirms the "Orders" page and the primary data table is present in the DOM.
3. **Alerts Monitoring Validation**
   - **Action:** Navigate to the `/alerts.html` page.
   - **Assertion:** Verify the title confirms the "Alerts" page.

## 3. Selenium WebDriver Setup
- **Framework:** JUnit 5 and Selenium WebDriver (via `selenium-java` 4.22.0)
- **Integration:** `SpringBootTest` with a randomized local server port.
- **Browser:** Google Chrome running in Headless mode (to facilitate CI pipeline integration).
- **Driver Management:** Automated via modern Selenium Manager (no explicit binaries required).

## 4. Local Execution
The tests are executed locally using Maven:
```cmd
mvn test -Dtest=RomsApplicationSeleniumTests
```
The local execution successfully validated the 3 critical paths against the running Spring Boot application context. 
A deliberate test failure mechanism was implemented and commented out, ready to be activated for the Jenkins pipeline failure demonstration in Week 10.

## 5. Deliverables
- ✅ Selenium script (`RomsApplicationSeleniumTests.java`) added to the repository.
- ✅ Successful local execution reports.

---
*Document version: 1.0 | Created: September 2026 | Author: Prithviraj Abnave (23102B0035)*
