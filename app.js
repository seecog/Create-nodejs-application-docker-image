//express is a framework. NodeJs
var express = require('express');
var app = express();
var router = express.Router();//Initializing the router object


router.get('/xyz',(req,res)=>{
    res.json({
        message : 'hello world'
    })
})

app.use('/api',router);


app.listen(3000,()=>{
    console.log('The server starts ');
})