const mongoose = require('mongoose')
const {Schema, model} = mongoose

const verbSchema = new Schema ({
	
		GreekN:String,
		EnglishN:String,
		ExamplesN:String,
	})


module.exports= mongoose.model("verbTable",verbSchema)
