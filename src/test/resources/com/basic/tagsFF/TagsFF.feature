@Important
Feature: create account of Facebook
As a user u need to open facebook home page and do teh validations

@Smoke
Scenario: validate First Name field1
Given User need to be on Facebook login page
When User enters user "Jagadeesh" first name 
Then User checks user "Jagadeesh" first name is present
Then close browser

@Smoke @Regression
Scenario: Validate create user multiple fields2
Given User need to be on Facebook login page
When User enters user "Jagadeesh" first name 
And User enters user "Vidadhala" surname
Then User checks user "Jagadeesh" first name is present
Then User mobile field should be blank
Then close browser

Scenario: validate First Name field3
Given User need to be on Facebook login page
When User enters user "Jagadeesh" first name 
Then User checks user "Jagadeesh" first name is present
Then close browser

@Regression
Scenario: validate First Name field4
Given User need to be on Facebook login page
When User enters user "Jagadeesh" first name 
Then User checks user "Jagadeesh" first name is present
Then close browser

@Smoke
Scenario: validate First Name field5
Given User need to be on Facebook login page
When User enters user "Jagadeesh" first name 
Then User checks user "Jagadeesh" first name is present
Then close browser

