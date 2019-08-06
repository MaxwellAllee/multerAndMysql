
var express = require('express')
  , app = express()
  , mysql      = require('mysql')
  , bodyParser=require("body-parser")
  , path = require('path')
	exphbs = require("express-handlebars");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Password',
  database : 'Bike'
});
 
connection.connect();
 
global.db = connection;
// all environments
const PORT = process.env.PORT || 8010;
app.set('port', process.env.PORT || PORT);
var exphbs = require("express-handlebars");
app.use(express.static('uploads'))
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
 app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});
//Middleware
require("./controller/router")(app);

