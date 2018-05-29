var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;
var BasePage = require('./base');


class About {

	phone(){
		driver.sleep(7000).then(function(){
			// console.log("phone");
			driver.findElement(By.xpath("//*[@class='_4bl9']//descendant::div[@class='_50f4']")).then(function(element){
				element.getText().then(function(phone){
					console.log(phone);
				});
			});
		});
	}//end of phone fxn

	address(){
		driver.sleep(8000).then(function(){
				driver.findElements(By.xpath("//*[@class='_4bl9']//descendant::span[@class='_2iem']")).then(function(elements){
          console.log("Address:");
          elements.forEach(function(element){
            element.getText().then(function(address){
            // console.log(address);
              if (address[0] != "@"){
                console.log(address);
                // writeToFile(address + ", ");
              }
          	})
          });
        });
		});
	}//end of address fxn

	hours(){
		driver.sleep(9000).then(function(){
			driver.findElement(By.xpath("//*[@id='u_jsonp_2_2']//child::div[@class='_4bl7']")).then(function(element){ 
				element.getText().then(function(hours){
          console.log("Hours: " + hours);
          // writeToFile(hours +", ");
        });
      });
		});
	}//end of hours fxn




}// end of class about

module.exports = new About();
