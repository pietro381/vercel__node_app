require('dotenv').config()
const mongoose = require('mongoose')
const { MONGO_CONNECTION_STRING }  = process.env
mongoose.connect( MONGO_CONNECTION_STRING, {})
.then(db=>console.log("PieDev is Connected!"))
.catch(err=>console.log(err))

