//Call express from node_modules and use a constant to call it as a constructor
const express = require("express");
const app = express();

//app settings
app.set("port",process.env.PORT || 3000);



//initialize app on port 3000
app.listen(app.get("port"), () => {
   console.log("server on port 3000")
});