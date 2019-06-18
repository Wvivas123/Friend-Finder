const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var path = require("path");

var PORT = process.env.PORT || 8080;




 
// app.listen(3000)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


require("./app/routing/apiRoutes.js")(app);
require('./app/routing/htmlroutes.js')(app);





app.listen(PORT, function(){
    console.log("APP Listing on" + " " + PORT);
})