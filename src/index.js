//Call express from node_modules and use a constant to call it as a constructor
const cors = require("cors");
const express = require("express");
const app = express();
const index = require("./routes/index.js");

//app settings, get the port of the machine to run
app.set("port", process.env.PORT || 3000);
app.engine("html",require("ejs").renderFile);
app.set("view engine","ejs");

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use(index);

//initialize app on port 3000
app.listen(app.get("port"), () => {
   console.log("server on port 3000")
});

