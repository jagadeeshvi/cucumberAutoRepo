package com.basic.parameterizationSD;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ParameterizationStepDef {

	WebDriver driver;
	@Given("^User need to be on Facebook login page$")
	public void user_need_to_be_on_Facebook_login_page(){
		
		System.setProperty("webdriver.chrome.driver","D:\\Cucumber Setup\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.get("https://www.facebook.com/");
	}
	
	@When("^User enters user \"([^\"]*)\" first name$")
	public void user_enters_user_first_name(String username) throws InterruptedException{
		
		driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys(username);
		Thread.sleep(1000);
	}
	
	@Then("^User checks user \"([^\"]*)\" first name is present$")
	public void User_checks_user_first_name_is_present(String userName) throws InterruptedException{
		
		String nameActual = driver.findElement(By.xpath("//input[@name='firstname']")).getAttribute("value");
		
		Assert.assertEquals(userName, nameActual);
		Thread.sleep(1000);
		
	}
	@And("User enters user \"([^\"]*)\" surname")
	public void user_enters_user_surname(String surName) throws InterruptedException{
		
		driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys(surName);
		
		Thread.sleep(1000);
	}
	
	@But("User mobile field should be blank")
	public void user_mobile_field_should_be_blank() throws InterruptedException{
		
		String userName = driver.findElement(By.xpath("//input[@name='reg_email__']")).getAttribute("value");
		
		Assert.assertEquals("", userName);
		
		Thread.sleep(1000);
		
	}
	
	@Then("^close browser$")
	public void close_browser(){
		driver.quit();
		driver = null;
	}
}
