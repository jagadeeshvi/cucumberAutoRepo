package com.basic.tagsSD;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		
		monochrome=true,
		
//		dryRun=true,
		
//		tags= {"@Important"}, // All Scenarios will be executed if this tag is given for a feature file
		
//		tags= {"@Smoke"},      // only tag with Smoke will be executed
		
//		tags= {"@Smoke", "@Regression"},//AND Condition
		
		tags= {"@Smoke,@Regression"},	 //OR Condition
		
		features={"src/test/resources/com/basic/tagsFF/"},
		
		glue={"com/basic/tagsSD/"},
		
		plugin ={"pretty", 
				"html:target/cucumber-htmlreport",
				"json:target/cucumber-report.json",
				"com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport.html"
		}
		
		)

public class RunTagsTest {

	
	
}
