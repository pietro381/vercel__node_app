const express = require('express')
const app = express()
const port = process.env.PORT || 3002



app.listen(port)

console.log("Running")

app.get("/vercel-node-app2.vercel.app", (req,res)=>{
	
		res.send("Hello Pietro")
	
	})
