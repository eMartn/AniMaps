import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Random;

public class SiteTest {
    private static WebDriver driver;

    @BeforeClass
    public static void setUp() {
        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
        driver = new ChromeDriver();
    }

    //    @Ignore
    @Test
    public void testMainSiteNavBar() throws InterruptedException {
        // Test new nav bar links
        driver.get("http://localhost:3000/Asia");

        Thread.sleep(1000);
        driver.findElement(By.linkText("Charities")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/charities");

        // TODO test links to all charities

        Thread.sleep(1000);
        driver.findElement(By.linkText("Animals")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/animal-list");

        Thread.sleep(1000);
        driver.findElement(By.linkText("Maps")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/Asia");

        Thread.sleep(1000);
        driver.findElement(By.linkText("ANIMAPS")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/");
    }

    @Test
    public void testWelcome() throws InterruptedException {
        driver.get("http://localhost:3000");
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/");

        Thread.sleep(1000);
        driver.findElement(By.linkText("Charities")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/charities");

        driver.get("http://localhost:3000");

        Thread.sleep(1000);
        driver.findElement(By.linkText("Animals")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/animal-list");

        driver.get("http://localhost:3000");

        Thread.sleep(1000);
        driver.findElement(By.linkText("DISCOVER MORE")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/Asia");

    }

//    @Ignore
    @Test
    public void testRegionNavigation() throws InterruptedException {
        driver.get("http://localhost:3000/Asia");

        // test right arrow buttons

        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-chevron-right']")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/Australia");

        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-chevron-right']")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/America");

        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-chevron-right']")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/SouthAmerica");

        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-chevron-right']")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/Africa");

        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-chevron-right']")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/Europe");

        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-chevron-right']")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/Asia");

        // test left arrow buttons

        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-chevron-left']")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/Europe");

        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-chevron-left']")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/Africa");

        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-chevron-left']")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/SouthAmerica");

        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-chevron-left']")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/America");

        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-chevron-left']")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/Australia");

        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-chevron-left']")).click();
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/Asia");
    }

    @Ignore
    @Test
    public void testCharities() throws InterruptedException {
        // TODO test all charity elements when those get added

    }

    @Ignore
    @Test
    public void testAnimalsPage() throws InterruptedException {
        // TODO test Animals page when env file is working
    }

    @Test
    public void testAsia() throws InterruptedException {
        driver.get("http://localhost:3000/Asia");
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/Asia");

        Thread.sleep(1000);
        driver.findElement(By.className("Goat")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();

        Thread.sleep(1000);
        driver.findElement(By.className("Monkey")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();

        Thread.sleep(1000);
        driver.findElement(By.className("Tiger")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();

        Thread.sleep(1000);
        driver.findElement(By.className("AS-Elephant")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();

        Thread.sleep(1000);
        driver.findElement(By.className("Panda2")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();
    }

    @Test
    public void testAustralia() throws InterruptedException {
        driver.get("http://localhost:3000/Australia");
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/Australia");

        Thread.sleep(1000);
        driver.findElement(By.className("Kangaroo")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();

        Thread.sleep(1000);
        driver.findElement(By.className("Crocodile")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();

        Thread.sleep(1000);
        driver.findElement(By.className("Butterfly")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();

        Thread.sleep(1000);
        driver.findElement(By.className("Spider")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();

        Thread.sleep(1000);
        driver.findElement(By.className("Koala")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();
    }

    @Test
    public void testNorthAmerica() throws InterruptedException {
        driver.get("http://localhost:3000/America");
        Assert.assertEquals(driver.getCurrentUrl(), "http://localhost:3000/America");

        Thread.sleep(1000);
        driver.findElement(By.className("AltBear")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();

        Thread.sleep(1000);
        driver.findElement(By.className("Boar")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();

        Thread.sleep(1000);
        driver.findElement(By.className("Deer")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();

        Thread.sleep(1000);
        driver.findElement(By.className("Bee")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();

        Thread.sleep(1000);
        driver.findElement(By.className("Flamingo")).click();
        Assert.assertTrue(driver.findElements(By.className("tabs")).size() > 0);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//i[@class='fas fa-times']")).click();
    }

}
