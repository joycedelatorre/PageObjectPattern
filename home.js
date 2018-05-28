var webdriver = require('selenium-webdriver'),
	By = webdriver.By;

var driver;

class HomePage {

	constructor(){
		driver = new webdriver.Builder()
			.forBrowser('firefox')
			.build();
	}

	navigateToGoogle(){
		driver.get('https://www.google.com/');
	}

	//searchEntry() function to enter in the text box what you're searching for
	searchEntry(){
		driver.findElement(By.name('q')).sendKeys('little mamas filipino food austin');
	}

	buttonClick(){
		driver.findElement(By.name('btnK')).click();
	}

}

module.exports = new HomePage();