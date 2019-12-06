var express = require('express');
var router= express();
const Candidate = require (`../models/candidateViewModel`)

router.get('/candidate',(req,res)=>{
    Candidate.find({}, (err, doc) => {
        res.json(JSON.stringify(doc))
       console.log(doc);
       return;  
});
})

module.exports= router;