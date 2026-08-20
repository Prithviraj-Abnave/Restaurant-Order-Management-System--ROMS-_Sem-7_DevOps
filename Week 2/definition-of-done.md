# Definition of Done (DoD) — Restaurant Order Management System

> The Definition of Done is a checklist that must be satisfied before any user story, feature, or sprint deliverable is considered "complete". It ensures consistent quality across the project.

---

## 1. Code Level (Per User Story / Feature)

- Code is written and compiles without errors
- Code follows consistent naming conventions and formatting
- No hardcoded values — configuration is externalised (application.properties)
- No commented-out dead code left in the codebase
- Code is committed to the correct feature branch with a meaningful commit message
  - Format: type(scope): subject
  - Example: feat(menu): add MenuItem entity and repository

---

## 2. Testing Level

- Unit tests written for service layer logic (where applicable)
- All existing tests pass (mvn test returns BUILD SUCCESS)
- Manual testing done in the browser — feature works as described in the acceptance criteria
- Edge cases considered (empty inputs, invalid data, boundary values)

---

## 3. Integration Level

- Feature branch is merged into develop via a Pull Request
- Pull Request has a description explaining what was changed and why
- No merge conflicts remain (resolved before merge)
- Application starts and runs without errors after the merge

---

## 4. Documentation Level

- Any new API endpoints are documented in the API list
- README is updated if setup steps have changed
- Weekly deliverable documents are completed for the current sprint
- Code comments added for non-obvious logic

---

## 5. DevOps Level (Applicable from Week 7 onward)

- Jenkins pipeline runs successfully (green build)
- If Selenium tests exist for this feature, they pass in the pipeline
- Docker image builds successfully (docker build completes without errors)
- Application runs correctly inside a Docker container
- Ansible playbook runs without errors (where applicable)

---

## 6. Deployment Level

- Application is accessible at http://localhost:8080 (or the container's mapped port)
- All existing features still work after the new changes (no regressions)
- Database schema changes are applied cleanly (schema.sql updated if needed)

---

## 7. Sprint Completion Checklist

Before marking a sprint as "Done", verify:

- [ ] All planned user stories meet the acceptance criteria
- [ ] All code is pushed to GitHub
- [ ] All tests pass
- [ ] Weekly deliverable documents are in the Week folder
- [ ] No critical bugs remain open
- [ ] Sprint retrospective notes captured (what went well, what to improve)

---

## Quick Reference — Is It Done?

Ask yourself these questions:

1. Does it work? (Can I demo it in the browser?)
2. Is it tested? (Do the tests pass?)
3. Is it committed? (Is it on GitHub?)
4. Is it merged? (Is it in the develop branch?)
5. Is it documented? (Can someone else understand what I did?)
6. Is it deployable? (Does the pipeline pass? Does Docker work?)

If all answers are "yes" — it's done.

---

*Document version: 1.0 | Created: August 2026 | Author: Prithviraj Abnave (23102B0035)*
