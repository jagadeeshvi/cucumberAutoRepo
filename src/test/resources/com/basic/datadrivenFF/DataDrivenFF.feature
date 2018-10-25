Feature: create account of Facebook
As a user u need to open facebook home page and do teh validations

Scenario Outline: Validate create user multiple fields
Given User need to be on Facebook login page
When User enters user "<user>" first name 
And User enters user "<surname>" surname
Then User checks user "<user>" first name is present
But User mobile field should be blank
Then close browser

Examples:
	| user | surname |
	|Tom   | Jerry   |
	|Lorren| hardy   |