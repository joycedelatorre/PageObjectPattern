var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;
var BasePage = require('./base');
var request = require('request');
var fs = require('fs');


var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

var writeToFile = function (data){
  // If the file didn't exist then it gets created on the fly.
  fs.appendFile("data_info", data, function(err){
    if(err){
      console.log(err);
    } else {
      console.log("content added");
    }
  });
}

class About {

	phone(){
		driver.sleep(7000).then(function(){
			// console.log("phone");
			driver.findElement(By.xpath("//*[@class='_4bl9']//descendant::div[@class='_50f4']")).then(function(element){
				element.getText().then(function(phone){
					console.log(phone);
					writeToFile(phone + ", ")
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
                writeToFile(address + ", ");
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
          writeToFile(hours +", ");
        });
      });
		});
	}//end of hours fxn

	image(){
		driver.sleep(10000).then(function(){
			driver.findElement(By.xpath("//img[@src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/10404436_877418918975495_7884373613217558080_n.jpg?_nc_cat=0&oh=10b193a379dfd2089515d9efc9b05cad&oe=5B76A264']")).then(function(element){
	        element.getAttribute("src").then(function(src){
	          download(src, 'logo.png',function(){
	          console.log("done");
	          });
	        });
	    });//EOL logging image 

		});
	}// end of image fxn

}// end of class about

module.exports = new About();
