import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
dotenv.config()
const app= express();
// app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const port = process.env.PORT || 2023

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/bookingapp')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB... '+err.message));

app.get("/",(req,res)=>{
    res.send("Welcome to HRMS V-2")
}) 

app.listen(8800,()=>{
    console.log("connected to backend");
})