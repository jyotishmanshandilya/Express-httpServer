const bodyParser = require('body-parser');
const express = require('express');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the dishes');
})
.post((req,res,next)=>{
    res.end("Will add the dish: "+req.body.name+" with details: "+req.body.description)
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end("PUT request not supported");
})
.delete((req,res,next)=>{
    res.end('Deleting all the dishes');
});



dishRouter.route('/:dishId')
.get((req,res,next)=>{
    res.end('Will send details of the dish: '+req.params.dishId+' to you');
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end("POST request not supported on /dish/"+req.params.dishId);
})
.put((req,res,next)=>{
    res.write("Updating the dish "+req.params.dishId);
    res.end("Will update the dish: "+ req.body.name 
            + " with the details: "+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting the dish: '+req.params.dishId);
});

module.exports = dishRouter;