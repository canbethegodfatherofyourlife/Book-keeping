const express = require('express');
const User = require('../models/User') 

const usersRoute = express.Router()
usersRoute.post('/register',async(req,res)=>{
// Register   
    try{
        const { name, email, password } = req.body;
        const user = await User.create({name,email,password});
        res.send(user)
    }catch(err){
        console.log(err);
    }
})

// Login
usersRoute.post('/login',(req,res) => {
    res.send('Login route')
})

// Update User
usersRoute.put('/update',(req,res) => {
    res.send('Update route')
})

// Delete User
usersRoute.delete('/delete/:id',(req,res) => {
    res.send('Delete route')
})

// Fetch User
usersRoute.get('/',(req,res) => {
    res.send('Fetch route')
})


module.exports = usersRoute;