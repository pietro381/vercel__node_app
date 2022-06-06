const express = require('express')
const app = express()
const myrouter=require('./src/route/router.js')
const port = process.env.PORT || 3001
const cors = require('cors')


require('dotenv').config
require('./connDb.js')



//app.use(cors);
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



app.listen(port, (error)=>{
	
		if (!error) {
				console.log("App is running")
			}
	
	
		else {
				console.log("App is not running")
			}
	
	})


app.use("/",myrouter)
