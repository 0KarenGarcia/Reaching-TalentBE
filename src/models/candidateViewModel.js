const { Schema, model } = require('mongoose');

const candidateSchema= new Schema({
    contact: String,
    result: Number,
    timeInit: Date,
    approved: Boolean,
   
})

const Candidate= model ("candidateView", candidateSchema, "candidateView" );
module.exports=Candidate;