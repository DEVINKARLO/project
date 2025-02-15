require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const env = process.env;
const app =express()
app.get('/',(req,res)=>{res.send('hello')})
mongoose.connect('mongodb+srv://adil:adilll@cluster0.u91hx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('connected to mongoDB')
    
})
.catch((err)=> console.log(err));

app.listen(env.PORT,() =>{console.log('listening on port 3000')})
