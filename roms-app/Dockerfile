# =============================================================================
# Dockerfile — Restaurant Order Management System (ROMS)
# Multi-stage build: Builder → Runtime
# Week 11 — Docker Image and Container Lifecycle
# Author: Prithviraj Abnave (23102B0035)
# =============================================================================

# ── Stage 1: Builder ──────────────────────────────────────────────────────────
FROM eclipse-temurin:17-jdk-alpine AS builder

LABEL maintainer="Prithviraj Abnave <prithviraj.abnave@roms.dev>"
LABEL description="ROMS Spring Boot Application — Builder Stage"

WORKDIR /build

# Copy Maven wrapper and POM first (layer caching for dependencies)
COPY pom.xml .
COPY mvnw .
COPY .mvn .mvn

# Download dependencies (cached if pom.xml unchanged)
RUN ./mvnw dependency:go-offline -B

# Copy application source code
COPY src src

# Build the application JAR (skip tests — tests run in CI stage separately)
RUN ./mvnw clean package -DskipTests -B

# ── Stage 2: Runtime ──────────────────────────────────────────────────────────
FROM eclipse-temurin:17-jre-alpine AS runtime

LABEL maintainer="Prithviraj Abnave <prithviraj.abnave@roms.dev>"
LABEL description="ROMS Spring Boot Application — Runtime Image"
LABEL version="1.0.0"

# Create a non-root user for security best practices
RUN addgroup -S roms && adduser -S roms -G roms

WORKDIR /app

# Copy the packaged JAR from the builder stage
COPY --from=builder /build/target/restaurant-order-management-system-0.0.1-SNAPSHOT.jar app.jar

# Set ownership
RUN chown roms:roms app.jar

# Switch to non-root user
USER roms

# Expose the application port
EXPOSE 8081

# Health check — ensures the container signals readiness
HEALTHCHECK --interval=30s --timeout=10s --start-period=45s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8081/actuator/health || exit 1

# JVM tuning for containerized environments
ENV JAVA_OPTS="-Xms256m -Xmx512m -XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0"

# Entrypoint — runs the Spring Boot application
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
