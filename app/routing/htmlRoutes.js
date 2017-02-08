var path = require("path");

module.exports = function(app){
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
		console.log("survey.html");
	});


	//not match? route to home as default

	app.use(function(req, res){
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});

	//console.log("home.html");
}