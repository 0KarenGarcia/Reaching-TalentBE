var express = require('express');
var router= express();

//const firstS = require (`../models/recluiterView`)

router.get('/me',(req,res)=>{
    res.send("hello word")
       console.log("msj");
       
})
 


module.exports= router;
