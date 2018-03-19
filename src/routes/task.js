const router = require("express").Router();
const mongojs = require("mongojs");
//initialize db and collections in mongo
const db = mongojs("mean-db",["tasks"]);

router.get("/tasks",(req,res,next) => {
    //finding documents
    db.tasks.find((err,tasks) => {
        //if there's an error, send it to the console, otherwise, render them as a json object
        if (err) return next.error();
        res.json(tasks);
    });
});

//finding a document based in the id
router.get("/tasks/:id",(req,res,next) => {
    //finding a single document
    db.tasks.findOne({_id: req.params.id},(err,task) => {
        //you know what does this do ;)
        if (err) return next.error();
        res.json(task);
    });
});

//saving a task
router.post("/tasks",(req,res,next)=>{
    let tarea = req.body;
    //if we're getting a bad task, we have to send a "bad data" code in json
    if (!tarea.title  || tarea.isDone + "") {
        res.status(400).json({
            error: "bad data"
        });
    } else {
        db.tasks.save(tarea, (err, tarea) => {
            //you know what does this do ;)
            if (err) return next.error();
            res.json(tarea);
        });
    }
});

//deleting a task
router.delete("/tasks/:id", (req,res,next) => {

});

module.exports = router;