const router = require("express").Router();
const mongojs = require("mongojs");

//initialize db and collections in mongo
const db = mongojs("mean-db",["tasks"]);

router.get("/tasks",(req,res,next) => {
    //finding documents
    db.tasks.find((err,tasks) => {
        //if there's an error, send it to the console, otherwise, render them as a json object
        if (err) return next(err);
        res.json(tasks);
    });
});

//finding a document based in the id
router.get("/tasks/:id",(req,res,next) => {
    //finding a single document
    db.tasks.findOne({_id: mongojs.ObjectId( req.params.id )},(err,task) => {
        //you know what does this do ;)
        if (err) return next(err);
        res.json(task);
    });
});

//saving a task
router.post("/tasks",(req,res,next) => {
    const task = req.body;
    //if we're getting a bad task, we have to send a "bad data" code in json
    if (!task.title  || task.isDone) {
        res.status(400).json({
            error: "bad data"
        });
    } else {
        db.tasks.save(task, (err, task) => {
            //you know what does this do ;)
            if (err) return next(err);
            res.json(task);
        });
    }
});

// Delete task
router.delete('/tasks/:id', (req, res, next) => {
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
        if(err){ res.send(err); }
        res.json(task);
    });
})

//updating
router.put("/tasks/:id",(req,res,next)=>{
    const task = req.body;
    const updateTask = {};

    //validating this task
    if (task.title && task.isDone){
        updateTask.title = task.title;
        updateTask.isDone = task.isDone;
    }
    if (!updateTask) {
        //you know what does this do ;)
        res.status(400).json({
            error: "bad data"
        });
    } else {
        db.tasks.update({_id: mongojs.ObjectId( req.params.id )}, (err,task)=>{
            //you know what does this do ;)
            if (err) return next(err);
            res.json(res);
        });
    }
});

module.exports = router;