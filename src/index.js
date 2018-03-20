//Call express from node_modules and use a constant to call it as a constructor
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();

//require routers
//const index = require("./routes/index.js");
const task = require("./routes/task.js");

//app settings, get the port of the machine to run
app.set("views",path.join(__dirname,"views" ));
app.set("port", process.env.PORT || 3000);
app.engine("html",require("ejs").renderFile);
app.set("view engine","ejs");

//Middle wares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
//app.use(index);
app.use("/api",task);

//static files
app.use(express.static(path.join(__dirname,"dist")));

//initialize app on port 3000
app.listen(app.get("port"), () => {
   console.log("server on port 3000")
});

