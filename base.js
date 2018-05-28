//REF:https://www.youtube.com/watch?v=D7gY-9OKkqI
//this simply contains common functionality across all pages.
//And it gives us some mechanincs of being able to share the instance of a driver

var webdriver = require('selenium-webdriver');

class BasePage{

	constructor(){
		this.driver = new webdriver.Builder()
			.forBrowser('firefox')
			.build();
	}

	navigateToGoogle(){
		this.driver.get('https://www.google.com/');
	}

}
module.exports= BasePage;
