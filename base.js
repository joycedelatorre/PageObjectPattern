//This simply contains common functionality across all pages.
//And it gives us some mechanincs of being able to share the instance of a driver

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
			.forBrowser('firefox')
			.build();

class BasePage{

	constructor(){
		global.driver = driver; 
		//once its initialized this driver becomes shareable and will not build multiple instances of a browser
	}

	navigateToGoogle(){
		driver.get('https://www.google.com/');
	}

}
module.exports= BasePage;


//REF:https://www.youtube.com/watch?v=D7gY-9OKkqI