var express = require('express');
var router= express();
const Recruiter= require (`../models/recruiterViewModel`)

router.get('/recruiter',(req,res)=>{
    Recruiter.find({}, (err, doc) => {
        res.json(JSON.stringify(doc))
       console.log(doc);
       return;  
});
})
 


module.exports= router;
