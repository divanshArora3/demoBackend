console.log("hello");
require('dotenv').config()
const express = require('express')
//import express from 'express';

const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send('hello world!')
})

// get(to get something,callback function passsing arguments request and response)
app.get('/twitter', (req,res)=>{
    res.send('divansh.com')
})
// alwasys remember never forget '/'
app.get('/login' ,(req,res)=>{
    res.send('<h1>please login at divanshArora</h1>')
})

app.get('/divansh',(req,res)=>{
    res.send('<h2>Divansh Arora</h2>')
})
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${port}`);
})
