$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoFF.feature");
formatter.feature({
  "line": 1,
  "name": "Validate first and last name",
  "description": "As a user u need to validate first and last name",
  "id": "validate-first-and-last-name",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Check first name and last name",
  "description": "",
  "id": "validate-first-and-last-name;check-first-name-and-last-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User need to be on demo site page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters first name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters last name",
  "keyword": "When "
});
formatter.match({
  "location": "DemoStepDef.user_need_to_be_on_demo_site_page()"
});
formatter.result({
  "duration": 38127251902,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDef.user_enters_first_name()"
});
formatter.result({
  "duration": 1241118223,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDef.user_enters_last_name()"
});
formatter.result({
  "duration": 1134732719,
  "status": "passed"
});
formatter.uri("GoogleFF.feature");
formatter.feature({
  "line": 1,
  "name": "Validate search of google",
  "description": "As a user u need to validate search of google",
  "id": "validate-search-of-google",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "validate search field",
  "description": "",
  "id": "validate-search-of-google;validate-search-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User need to be on google page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters search string",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleStepDef.user_need_to_be_on_google_page()"
});
formatter.result({
  "duration": 23030073528,
  "status": "passed"
});
formatter.match({
  "location": "GoogleStepDef.user_enters_search_string()"
});
formatter.result({
  "duration": 1109657078,
  "status": "passed"
});
formatter.uri("MultiFF.feature");
formatter.feature({
  "line": 1,
  "name": "create account of Facebook",
  "description": "As a user u need to open facebook home page and do teh validations",
  "id": "create-account-of-facebook",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "validate First Name field",
  "description": "",
  "id": "create-account-of-facebook;validate-first-name-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User need to be on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters user \"Jagadeesh\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User checks user \"Jagadeesh\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiStepDef.user_need_to_be_on_Facebook_login_page()"
});
formatter.result({
  "duration": 47905003222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jagadeesh",
      "offset": 18
    }
  ],
  "location": "MultiStepDef.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 1164913808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jagadeesh",
      "offset": 18
    }
  ],
  "location": "MultiStepDef.User_checks_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 1049381114,
  "status": "passed"
});
formatter.match({
  "location": "MultiStepDef.close_browser()"
});
formatter.result({
  "duration": 687852190,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate create user multiple fields",
  "description": "",
  "id": "create-account-of-facebook;validate-create-user-multiple-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User need to be on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters user \"Jagadeesh\" first name",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters user \"Vidadhala\" surname",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User checks user \"Jagadeesh\" first name is present",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User mobile field should be blank",
  "keyword": "But "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiStepDef.user_need_to_be_on_Facebook_login_page()"
});
formatter.result({
  "duration": 51174513820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jagadeesh",
      "offset": 18
    }
  ],
  "location": "MultiStepDef.user_enters_user_first_name(String)"
});
formatter.result({
  "duration": 1189738611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vidadhala",
      "offset": 18
    }
  ],
  "location": "MultiStepDef.user_enters_user_surname(String)"
});
formatter.result({
  "duration": 1147777965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jagadeesh",
      "offset": 18
    }
  ],
  "location": "MultiStepDef.User_checks_user_first_name_is_present(String)"
});
formatter.result({
  "duration": 1041484422,
  "status": "passed"
});
formatter.match({
  "location": "MultiStepDef.user_mobile_field_should_be_blank()"
});
formatter.result({
  "duration": 1025792440,
  "status": "passed"
});
formatter.match({
  "location": "MultiStepDef.close_browser()"
});
formatter.result({
  "duration": 679525255,
  "status": "passed"
});
});