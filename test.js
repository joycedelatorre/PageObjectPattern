// var webdriver = require('selenium-webdriver');
// var driver = new webdriver.Builder()
// 	.forBrowser('firefox')
// 	.build();
// driver.get('https://www.google.com/');

var homePage = require('./home');
homePage.navigateToGoogle();
homePage.searchEntry();
homePage.buttonClick();