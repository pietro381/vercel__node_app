const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const mygoal = require('../models/goalSchema.js')
const noun_entry = require('../models/noun.js')
const adj_entry = require('../models/adj.js')
const verb_entry = require('../models/verb.js')
const bodyParser = require('body-parser')


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get("/", (req,res)=>{
		res.send("Welcome to PieDev")
	})

router.get("/db", (req,res)=>{
	res.send("This is the database page")
	})

router.get("/Noun", async (req,res)=>{
	const x = await noun_entry.find({}).lean()	
	res.send(x)
})


router.get("/Adj", async (req,res)=>{
	const x = await adj_entry.find({}).lean()	
	res.send(x)
})


router.get("/Verb", async (req,res)=>{
	const x = await verb_entry.find({}).lean()	
	res.send(x)
})



router.get("/Add", async (req,res)=>{
	const saveGoal = new mygoal()
	saveGoal.goal = "This is a test++"
	saveGoal.user = "It is me, no worries"
	await saveGoal.save()
	res.send("Updated as requested")
})

router.post("/addNoun", jsonParser, async(req,res)=>{
		console.log(req.body)
		const newnoun = new noun_entry ()
		newnoun.GreekN = req.body.GreekN
		newnoun.EnglishN = req.body.EnglishN
		newnoun.ExamplesN = req.body.ExamplesN
		await newnoun.save()
		res.send("NOUN")
	})

router.post("/addAdj", jsonParser, async(req,res)=>{
		console.log(req.body)
		const newadj = new adj_entry ()
		newadj.GreekN = req.body.GreekN
		newadj.EnglishN = req.body.EnglishN
		newadj.ExamplesN = req.body.ExamplesN
		await newadj.save()
		res.send("ADJ")
	})

router.post("/addVerb", jsonParser, async(req,res)=>{
		console.log(req.body)
		const newverb = new verb_entry ()
		newverb.GreekN = req.body.GreekN
		newverb.EnglishN = req.body.EnglishN
		newverb.ExamplesN = req.body.ExamplesN
		await newverb.save()
		res.send("VERB")
	})





module.exports=router

