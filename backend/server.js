const express = require('express')
const mongoose = require('mongoose')
const dbConnect = require('./config/dbConnect')

const app = express()

// DB connect
dbConnect()

//Routes
// User routes

// Register
app.post('/api/users/register',(req,res) => {
    res.send('Register route')
})

// Login
app.post('/api/users/login',(req,res) => {
    res.send('Login route')
})

// Update User
app.put('/api/users/update',(req,res) => {
    res.send('Update route')
})

// Delete User
app.delete('/api/users/delete/:id',(req,res) => {
    res.send('Delete route')
})

// Fetch User
app.get('/api/users',(req,res) => {
    res.send('Fetch route')
})


// Server 
const PORT = process.env.PORT || 3010;    // if deployed in heroku , otherwise on port 3010
app.listen(PORT,()=> {
    console.log(`Server is up and running ${PORT}`)
})


// book
// eduBl2eiLy3FqlFl