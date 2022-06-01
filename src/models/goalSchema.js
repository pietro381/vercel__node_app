const mongoose = require('mongoose')
const {Schema, model} = mongoose

const goalSchema = new Schema ({
	
		goal:String,
		user:String
	})


module.exports= mongoose.model("mygoals",goalSchema)

