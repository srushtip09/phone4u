import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.WebElement;
import java.time.Duration;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.JavascriptExecutor;

public class Case2 {
	public static void main(String[] args) throws Exception {
        
	       System.setProperty("webdriver.chrome.driver", "D:\\phone4u\\testerfiles\\src\\drivers\\chromedriver.exe");
	        WebDriver driver = new ChromeDriver();
	        WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(30));
	        driver.manage().window().maximize();
	        driver.get("http://localhost:3000/login");
	        
	        driver.findElement(By.xpath("//span[normalize-space()='Sign-In']")).click();
	        driver.findElement(By.xpath("//input[@id='email']")).sendKeys("s@gmail.com");
	        driver.findElement(By.xpath("//input[@id='password']")).sendKeys("123456789");
	        driver.findElement(By.xpath("//button[@id='login']")).click();
	        String actualUrl = "http://localhost:3000/login";
	        String expectedUrl = driver.getCurrentUrl();
	        Assert.assertEquals(expectedUrl, actualUrl);
	        Thread.sleep(5000);
	        driver.get("http://localhost:3000/admin");
	        driver.findElement(By.xpath("//span[contains(@class,'mr-2')]")).click();
	        driver.findElement(By.xpath("//input[@id='name']")).sendKeys("Iphone 14");
	        driver.findElement(By.xpath("//input[@id='image']")).sendKeys("www.google.com");
	        driver.findElement(By.xpath("//input[@id='price']")).sendKeys("97000");
	        driver.findElement(By.xpath("//input[@id='portfolio']")).sendKeys("128gb");
	        driver.findElement(By.xpath("//input[@id='brand']")).sendKeys("4");
	        Thread.sleep(5000);
	        WebElement ele = driver.findElement(By.xpath("//span[@class='mr ']"));
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();",ele);

	    }
}
