//Dependecies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

//middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Set Handlebars as the defauilt templateing engine.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//Start Server
app.listen(PORT, function(){
    console.log("server Listening on: " + PORT);
});