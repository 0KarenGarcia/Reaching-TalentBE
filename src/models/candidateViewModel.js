const { Schema, model } = require('mongoose');

const candidateSchema= new Schema({
    question: String,
     answerOne: String,
     answerOne: String,
     succes: Number,
     timeFinish: Date
   
})


const Candidate= model ("candidateView", candidateSchema, "candidateView" );
module.exports=Candidate;

