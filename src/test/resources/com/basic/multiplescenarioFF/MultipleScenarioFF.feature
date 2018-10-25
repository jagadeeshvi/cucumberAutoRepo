Feature: create account of Facebook
As a user u need to open facebook home page and do teh validations

Scenario: validate First Name field
Given User need to be on Facebook login page
When User enters user first name 
Then User checks user first name is present
Then close browser


Scenario: Validate create user multiple fields
Given User need to be on Facebook login page
When User enters user first name 
And User enters user surname
Then User checks user first name is present
But User mobile field should be blank
Then close browser