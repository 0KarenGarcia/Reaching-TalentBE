const { Schema, model } = require('mongoose');

const firstSchema= new Schema({
   /*  question: String,
    answerOne: String,
    answerOne: String,
    succes: Number,
    timeFinish: Date */
    msj: String
})

const First= model("first", firstSchema, "first");
module.exports= First;
