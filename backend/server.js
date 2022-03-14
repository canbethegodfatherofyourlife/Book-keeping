const express = require('express')
const mongoose = require('mongoose')

const app = express()

// connect DB 
const dbUrl = 'mongodb+srv://book:eduBl2eiLy3FqlFl@cluster0.ojgdo.mongodb.net/book-keeping-app'  // change test to the name of our app 
mongoose.connect(dbUrl,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log('Db Connection established')
}).catch(err => {
    console.error(err)
})

const PORT = process.env.PORT || 3010;    // if deployed in heroku , otherwise on port 3010

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
app.listen(PORT,()=> {
    console.log(`Server is up and running ${PORT}`)
})


// book
// eduBl2eiLy3FqlFl