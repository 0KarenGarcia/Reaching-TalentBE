const { Schema, model } = require('mongoose');

const recruiterSchema= new Schema({
    contact: String,
    result: Number,
    timeInit: Date,
    approved: Boolean,
})


const Recruiter= model("recruiterView", recruiterSchema, "recruiterView");
module.exports= Recruiter;