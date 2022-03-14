const express = require('express')
const mongoose = require('mongoose')
const dbConnect = require('./config/dbConnect')
const User = require('./models/User')

const app = express()

// DB connect
dbConnect()


// Passing body data and accept incoming data
app.use(express.json())



//Routes
// User routes

// Register
app.post('/api/users/register',async(req,res) => {
    
    try{
        const { name, email, password } = req.body;
        const user = await User.create({name,email,password});
        res.send(user)
    }catch(err){
        console.log(err);
    }
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