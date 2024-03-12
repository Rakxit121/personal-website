//  importing 
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./database/db');



//  Making express app
const app = express();


//  Configuring dotenv
dotenv.config();

// mongodb connection from db.js
connectDB();




app.get('/', (req, res) => {

    res.send('Backend server running!');

});
