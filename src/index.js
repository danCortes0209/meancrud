//Call express from node_modules and use a constant to call it as a constructor
const express = require("express");
const app = express();

//app settings, get the port of the machine to run
app.set("port", process.env.PORT || 3000);
//call the render file property from ejs
app.engine("html",require("ejs").renderFile);
//set ejs as the template engine
app.set("view engine","ejs");



//initialize app on port 3000
app.listen(app.get("port"), () => {
   console.log("server on port 3000")
});