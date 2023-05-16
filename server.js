const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()
 
// PORT CONFIG
const port = process.env.PORT || 8081

app.use(express.json())

app.use("/api" , require('./routes/userRoutes'))

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI).then( ()=> console.log("DATABASE CONNECTED SUCCESSFULLY"))

/* app.get('/' , (req,res)=> {
    res.send("<h1> HELLO </h1>")
}) */


// SERVER
app.listen(port , ()=> console.log("listening on port:",port))