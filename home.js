var webdriver = require('selenium-webdriver'),
	By = webdriver.By;
var BasePage = require('./base');
var driver;

class HomePage extends BasePage{

	//searchEntry() function to enter in the text box what you're searching for
	searchEntry(){
		this.driver.findElement(By.name('q')).sendKeys('little mamas filipino food austin');
	}

	buttonClick(){
		this.driver.findElement(By.name('btnK')).click();
	}

}

module.exports = new HomePage();