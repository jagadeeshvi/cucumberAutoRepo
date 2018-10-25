Feature: create account of Facebook
As a user u need to open facebook home page and do teh validations

Background: common login steps
Given User need to be on Facebook login page

Scenario: validate First Name field
When User enters user "Jagadeesh" first name 
Then User checks user "Jagadeesh" first name is present
Then close browser


Scenario: Validate create user multiple fields
When User enters user "Jagadeesh" first name 
And User enters user "Vidadhala" surname
Then User checks user "Jagadeesh" first name is present
But User mobile field should be blank
Then close browser