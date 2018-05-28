var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;
var BasePage = require('./base');


class SearchResult extends BasePage{
	clickLinkWebsite(){
		driver.sleep(6000).then(function(){
			driver.findElement(By.linkText('Website')).click();
		});
	}
}
module.exports = new SearchResult();

// Ref: https://www.youtube.com/watch?v=IlFhALT90bU&t=74s