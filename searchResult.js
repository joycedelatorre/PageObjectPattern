var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;
var BasePage = require('./base');


class SearchResult extends BasePage{
	clickLinkWebsite(){
		driver.sleep(5000).then(function(){
			driver.findElement(By.linkText('Website')).click();
			driver.sleep(6000).then(function(){
				driver.findElement(By.linkText('About')).click();
				var about = require('./about'); //-------> I was stuck here so i saved it in a variable (Not ideal because now my calls are in searchResults.js instead of test.js)
				about.phone();
				about.address();
				about.hours();
			});
		});
	}
}
module.exports = new SearchResult();

// Ref: https://www.youtube.com/watch?v=IlFhALT90bU&t=74s