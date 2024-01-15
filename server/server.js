const express = require("express");

const cors = require("cors");
const mongoose =require("mongoose");
require('dotenv').config();
const userRoutes =require("./routes/UserRoutes")
const bodyParser = require('body-parser');

const app =express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI).then (() =>{
    console.log("DB connected")
})
require('dotenv').config();

app.use("/api/user", userRoutes);

app.listen(5000, console.log("server started on port 5000😎"));