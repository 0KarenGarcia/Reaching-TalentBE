const express = require('express');
const app = express();
const recruiterView =require(`./controller/recruiterView`)
const candidateView =require(`./controller/candidateView`)
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(recruiterView);
app.use(candidateView);


module.exports = app;
