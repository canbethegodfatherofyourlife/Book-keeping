const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require('./config/dbConnect')
const error = require('./middlewares/errorMiddleware')
const usersRoute = require('./routes/usersRoute')
const bookRoute = require('./routes/bookRoute')

const app = express()


dotenv.config() 

// DB connect
dbConnect()

// Passing body data and accept incoming data
app.use(express.json())



//Routes
// User routes
app.use('/api/users',usersRoute)

//Book routes
app.use('/api/books',bookRoute)


// Error Middleware 
app.use(error.errorMiddleware)

// Server 
const PORT = process.env.PORT || 3010;    // if deployed in heroku , otherwise on port 3010
app.listen(PORT,()=> {
    console.log(`Server is up and running ${PORT}`)
})

