'use strict'
// Import the appropriate class
const Dialogflow = require('dialogflow')
let getSongInfo = require('./../songs')



const webhook = (req, res) => {

let df_res = req.body.queryResult.fulfillmentMessages
let df_intent = req.body.queryResult.intent.displayName
let df_intent2 = 'Audition_map - find'
let df_intent3 = 'Audition_map - add - Audition_map'

if (df_intent === df_intent2) {

	let df_genre = req.body.queryResult.outputContexts[0].parameters.genre
	let df_instrument = req.body.queryResult.outputContexts[0].parameters.performance_instrument
	// let df_lyric = req.body.queryResult.outputContexts[0].parameters.genre
	// let df_number = req.body.queryResult.outputContexts[0].parameters.performance_instrument
	// let df_anatomy_tempo = req.body.queryResult.outputContexts[0].parameters.genre
	// let df_performance_voice = req.body.queryResult.outputContexts[0].parameters.performance_instrument
	let df_query = df_genre.concat('+',df_instrument)

	getSongInfo(df_query,function(resp){
		   
	    res.send(resp)});
} else if (df_intent === df_intent3) {

	let df_genre = req.body.queryResult.outputContexts[1].parameters.genre
	let df_instrument = req.body.queryResult.outputContexts[1].parameters.performance_instrument
	// let df_lyric = req.body.queryResult.outputContexts[0].parameters.genre
	// let df_number = req.body.queryResult.outputContexts[0].parameters.performance_instrument
	// let df_anatomy_tempo = req.body.queryResult.outputContexts[0].parameters.genre
	// let df_performance_voice = req.body.queryResult.outputContexts[0].parameters.performance_instrument
	let df_query = df_genre.concat('+',df_instrument)

	getSongInfo(df_query,function(resp){
		   
	    res.send(resp)});
}            




} 


module.exports = webhook


function buildChatResponse(chat) {
	return JSON.stringify({"fulfillmentText": chat}, null, " ");
}