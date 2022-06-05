const express = require('express')
const app = express()
const port = process.env.PORT || 3002


app.listen(port)

console.log("Running")

app.get("/", (req,res)=>{
	
		res.send("Hello Pietro. Finally I got it working.....Cant believe it")
	
	})

