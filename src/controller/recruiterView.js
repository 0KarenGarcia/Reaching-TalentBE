var express = require('express');
var router= express();
const Recruiter= require (`../models/recruiterViewModel`)

router.get('/recruiter',(req,res)=>{
    Recruiter.find({}, (err, doc) => {
        res.json(doc)
       console.log(doc);
       return;  
});
})

router.post('/recruiter', (req, res) => {
    const { contact, result, timeInit, approved} = req.body;
    console.log( contact);
    console.log( result);
    console.log( approved);
    console.log(typeof contact);
    console.log(typeof result);
    console.log(typeof approved);
    if(typeof contact != "string" || typeof result != "number"||  typeof approved != "boolean") return res.status(400).json({success: false, error: 'Bad Request'});
    Recruiter.create({contact, result, approved },(err, doc) => {
      if (err) return console.log(err);
      res.send('Saved');
    }); 
  });
  
module.exports= router;
