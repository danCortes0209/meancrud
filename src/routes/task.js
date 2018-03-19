const router = require("express").Router();
const mongojs = require("mongojs");
//initialize db and collections in mongo
const db = mongojs("mean-db",["tasks"]);

router.get("/task",(req,res,next) => {
    //finding documents
    db.tasks.find((err,tasks) => {
        //if there's an error, send it to the console, otherwise, render them as a json object
        if (err) return next.error();
        res.json(tasks);
    });
});

module.exports = router;