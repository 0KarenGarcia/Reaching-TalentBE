var express = require('express');
var router= express();
const First = require (`../models/recruiterViewModel`)

router.get('/recruiter',(req,res)=>{
    console.log(First);
    
    First.find({msj:"hola mundo "}, (err, doc) => {
        res.json(JSON.stringify(doc))
       console.log(doc);
       return;  
});
})
 


module.exports= router;
