var path = require("path");

//set up route
module.exports = function(app){

	//survery
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname,  "/../public/survey.html"));
		console.log("survey.html");
	});


	//not match? route to home as default
	app.use(function(req, res){
		res.sendFile(path.join(__dirname,  "/../public/home.html"));
	});

	//console.log("home.html");
}//end of module