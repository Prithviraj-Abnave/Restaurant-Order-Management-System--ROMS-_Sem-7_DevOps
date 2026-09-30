package com.roms;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class RomsApplicationSeleniumTests {

    @LocalServerPort
    private int port;

    private WebDriver driver;

    @BeforeEach
    public void setUp() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        options.addArguments("--disable-gpu");
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        
        driver = new ChromeDriver(options);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
    }

    @AfterEach
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    // Journey 1: Homepage / Menu Catalogue loads correctly
    @Test
    public void testHomepageLoads() {
        driver.get("http://localhost:" + port + "/");
        String title = driver.getTitle();
        assertTrue(title.contains("ROMS"), "Title should contain ROMS");
        
        WebElement header = driver.findElement(By.tagName("h1"));
        assertTrue(header.getText().contains("Menu"), "Header should say Menu");
    }

    // Journey 2: View Orders Page
    @Test
    public void testViewOrdersPage() {
        driver.get("http://localhost:" + port + "/orders.html");
        
        WebElement title = driver.findElement(By.tagName("h1"));
        assertTrue(title.getText().contains("Orders"), "Should be on the Orders page");
        
        // Check if table exists
        WebElement table = driver.findElement(By.tagName("table"));
        assertNotNull(table, "Orders table should exist");
    }
    
    // Journey 3: View Alerts Page
    @Test
    public void testViewAlertsPage() {
        driver.get("http://localhost:" + port + "/alerts.html");
        
        WebElement title = driver.findElement(By.tagName("h1"));
        assertTrue(title.getText().contains("Alerts"), "Should be on the Alerts page");
    }

    // Deliberate Defect for Week 10
    // Uncomment this assertion to cause a test failure in pipeline
    @Test
    public void testDeliberateFailure() {
        driver.get("http://localhost:" + port + "/");
        // assertEquals("Wrong Title", driver.getTitle(), "Deliberate failure for Week 10");
        assertTrue(true); // Fixed for now
    }
}
