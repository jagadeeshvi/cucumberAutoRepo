Feature: create account of Facebook
As a user u need to open facebook home page and do teh validations

Scenario: validate First Name field
Given User need to be on Facebook login page
When User enters user "Jagadeesh" first name 
Then User checks user "Jagadeesh" first name is present


Scenario: Validate create user multiple fields
Given User need to be on Facebook login page
When User enters user "Jagadeesh" first name 
And User enters user "Vidadhala" surname
Then User checks user "Jagadeesh" first name is present
But User mobile field should be blank
