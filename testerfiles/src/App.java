import java.time.Duration;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.Assert;  

public class App {

    public static void main(String[] args) throws Exception {
        
       System.setProperty("webdriver.chrome.driver", "D:\\phone4u\\testerfiles\\src\\drivers\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://localhost:3000/login");
        
        driver.findElement(By.xpath("//span[normalize-space()='Sign-In']")).click();
        driver.findElement(By.xpath("//input[@id='email']")).sendKeys("s@gmail.com");
        driver.findElement(By.xpath("//input[@id='password']")).sendKeys("123456789");
        driver.findElement(By.xpath("//button[@id='login']")).click();
        String actualUrl = "http://localhost:3000/login";
        String expectedUrl = driver.getCurrentUrl();
        Assert.assertEquals(expectedUrl, actualUrl);
    }
}
