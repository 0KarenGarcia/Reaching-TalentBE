const { Schema, model } = require('mongoose');

const recruiterSchema= new Schema({
   question: String,
    answerOne: String,
    answerOne: String,
    succes: Number,
    timeFinish: Date 
    
})

const Recruiter= model("recruiterView", recruiterSchema, "recruiterView");
module.exports= Recruiter;
