// var webdriver = require('selenium-webdriver');
// var driver = new webdriver.Builder()
// 	.forBrowser('firefox')
// 	.build();
// driver.get('https://www.google.com/');

var homePage = require('./home');

homePage.navigateToGoogle();
var searchResult = homePage.searchEntry();
searchResult.clickLinkWebsite();

//var about = searchResult.clickLinkWebsite(); 
//about.phone();

//-->> this is throwing me an error
//even if i require ('./about') in searchResult.
//either the automation doesn't run and immediately gives me an error or it will 
//run but about is undefined.

//THE REST OF THE CALLS are in searchResult.js I had a hunch that it is acting this 
//way because the URLs have changed from google to facebook. But I might be wrong.









