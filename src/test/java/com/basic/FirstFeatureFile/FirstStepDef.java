package com.basic.FirstFeatureFile;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FirstStepDef {

	WebDriver driver;
	@Given("^User need to be on Facebook login page$")
	public void user_need_to_be_on_Facebook_login_page(){
		
		System.setProperty("webdriver.chrome.driver","D:\\Cucumber Setup\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.get("https://www.facebook.com/");
	}
	
	@When("^User enters user first name$")
	public void user_enters_user_first_name() throws InterruptedException{
		
		driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys("Jagadeesh");
		Thread.sleep(1000);
	}
	
	@Then("^User checks user first name is present$")
	public void User_checks_user_first_name_is_present(){
		
		String userName = driver.findElement(By.xpath("//input[@name='firstname']")).getAttribute("value");
		
		Assert.assertEquals("Jagadeesh", userName);
		
	}
	
}
