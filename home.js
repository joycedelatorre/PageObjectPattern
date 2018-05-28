var webdriver = require('selenium-webdriver'),
	By = webdriver.By;
var BasePage = require('./base');


class HomePage extends BasePage{

	//searchEntry() it is a function that will get the user is searching for and will return a new page.
	searchEntry(){
			driver.findElement(By.name('q')).sendKeys('little mamas filipino food austin');
			driver.findElement(By.name('btnK')).click();
			return require('./searchResult');
	}
}

module.exports = new HomePage();