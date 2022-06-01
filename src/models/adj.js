const mongoose = require('mongoose')
const {Schema, model} = mongoose

const adjSchema = new Schema ({
	
		GreekN:String,
		EnglishN:String,
		ExamplesN:String,
	})


module.exports= mongoose.model("adjTable",adjSchema)
