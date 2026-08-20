# ROMS — Restaurant Order Management System

A web-based Restaurant Order Management System built with **Spring Boot**, designed for the **DevOps (SEM 7)** curriculum.

## 🍽️ About

ROMS enables restaurant staff to:
- **Manage menu items** — Add, edit, delete, and search menu items
- **Create & update orders** — Take dine-in orders with item selection and quantities
- **Track order status** — Real-time lifecycle: Placed → Preparing → Ready → Served → Closed
- **Search & filter** — Find orders by status, date, table number; search menu by name/category
- **Exception alerts** — Out-of-stock warnings and stale order detection

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5 + CSS3 + Vanilla JavaScript |
| Backend | Java 17 + Spring Boot 3.3 |
| Database | MySQL 8 |
| ORM | Spring Data JPA (Hibernate) |
| Build Tool | Maven 3.9+ |
| Testing | Selenium WebDriver |
| CI/CD | Jenkins (Pipeline as Code) |
| Containerization | Docker + Docker Compose |
| Config Management | Ansible |
| Version Control | Git + GitHub |

## 📁 Project Structure

```
roms-app/
├── src/
│   ├── main/
│   │   ├── java/com/roms/
│   │   │   ├── RomsApplication.java      # Entry point
│   │   │   ├── controller/               # REST controllers
│   │   │   ├── service/                  # Business logic
│   │   │   ├── repository/              # Data access (JPA)
│   │   │   └── model/                   # Entity classes
│   │   └── resources/
│   │       ├── application.properties    # App configuration
│   │       ├── static/                  # HTML, CSS, JS files
│   │       └── templates/               # (reserved for templates)
│   └── test/java/com/roms/              # Test classes
├── pom.xml                               # Maven dependencies
└── README.md                             # This file
```

## 🚀 Prerequisites

- Java 17 or higher
- Maven 3.9+
- MySQL 8 running on port 3306

## ⚙️ Setup & Run

### 1. Create the MySQL database

```sql
CREATE DATABASE roms_db;
```

### 2. Update database credentials (if needed)

Edit `src/main/resources/application.properties`:
```properties
spring.datasource.username=root
spring.datasource.password=root
```

### 3. Build and run

```bash
mvn clean package
mvn spring-boot:run
```

### 4. Access the application

Open your browser and go to: [http://localhost:8080](http://localhost:8080)

## 🔀 Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production-ready releases |
| `develop` | Integration branch for features |
| `feature/*` | New feature development |
| `bugfix/*` | Bug fixes |
| `release/*` | Release preparation |

## 📋 Git Commit Convention

Format: `type(scope): subject`

Examples:
- `feat(menu): add MenuItem entity and repository`
- `fix(order): correct total calculation on update`
- `docs(readme): update setup instructions`
- `test(selenium): add menu search test case`

## 👨‍💻 Author

**Prithviraj Abnave** (23102B0035)
DevOps — SEM 7

## 📄 License

This project is for academic purposes only.
