const mongoose = require('mongoose')
const {Schema, model} = mongoose

const nounSchema = new Schema ({
	
		GreekN:String,
		EnglishN:String,
		ExamplesN:String,
	})


module.exports= mongoose.model("nounTable",nounSchema)
