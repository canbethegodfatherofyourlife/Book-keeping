const express = require('express')
const mongoose = require('mongoose')
const dbConnect = require('./config/dbConnect')
const usersRoute = require('./routes/usersRoute')

const app = express()

// DB connect
dbConnect()


// Passing body data and accept incoming data
app.use(express.json())



//Routes
// User routes
app.use('/api/users',usersRoute)


// Server 
const PORT = process.env.PORT || 3010;    // if deployed in heroku , otherwise on port 3010
app.listen(PORT,()=> {
    console.log(`Server is up and running ${PORT}`)
})

