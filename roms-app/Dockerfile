# syntax=docker/dockerfile:1
# ROMS Spring Boot application using Docker Hardened Images

# Build stage: Java 17 JDK and build tooling
FROM dhi.io/maven:3-jdk17-alpine3.24-dev AS builder

LABEL org.opencontainers.image.title="ROMS Spring Boot Application"
LABEL org.opencontainers.image.description="Restaurant Order Management System build stage"

WORKDIR /build

# Cache Maven dependencies independently from application source changes
COPY pom.xml ./
RUN mvn dependency:go-offline -B

COPY src src
RUN mvn clean package -DskipTests -B

# Runtime stage: minimal Java 17 DHI, nonroot by default
FROM dhi.io/eclipse-temurin:17-alpine3.24 AS runtime

LABEL org.opencontainers.image.title="ROMS Spring Boot Application"
LABEL org.opencontainers.image.description="Restaurant Order Management System runtime image"
LABEL org.opencontainers.image.version="1.0.0"

WORKDIR /app
COPY --from=builder --chown=65532:65532 /build/target/restaurant-order-management-system-0.0.1-SNAPSHOT.jar /app/app.jar
COPY --from=builder --chown=65532:65532 /build/target/classes/com/roms/ContainerHealthCheck.class /app/classes/com/roms/ContainerHealthCheck.class

EXPOSE 8081

# DHI runtime images do not provide a shell; JAVA_TOOL_OPTIONS is consumed directly by the JVM.
ENV JAVA_TOOL_OPTIONS="-Xms256m -Xmx512m -XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0"

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
