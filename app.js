var express = require( 'express' );
var	bodyParser = require('body-parser');
var	app = express();
var	server = require('http').createServer(app);
//var	io = require('socket.io').listen(server);
var mongoose = require('mongoose');
var url = require('url');
var fs = require('fs'); 
var request = require('request');
var http = require('http');
var https = require('https');
var util = require('util');

var doc;
var responce;
var quest;

server.listen(process.env.PORT || 3005, function(){
	console.log('Start listening 3005...');
} );



 mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://localhost/calendar', function(err){
if (err) console.log (err);
 	console.log('Conneced to MongoDB');
 });

 // БД СХЕМА
var tempSchema = mongoose.Schema ({
	date: String,
	temp: String,
	sign: Boolean,
	created: {type: Date, default: Date.now}
});


var Temps = mongoose.model('Message', tempSchema);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){

	res.sendFile(__dirname + '/public/index.html');
});

app.get('/donate', function(req, res){

	res.sendFile(__dirname + '/public/donate.html');
});

app.get('/get', function(req, res){
	console.log(req.query.date);
	quest = req.query.date;
	var newTemp = new Temps ({date: quest, temp: '25', sign: true });
		newTemp.save(function(err){
			if (err) {
				console.log(err);
			}
		})
		


	//Тащим данные из БД
	var dataFromDB = Temps.find({date: quest}, function(err, docs){
		doc = docs[0].temp;
		console.log(doc);
	});
	
	//var rand = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
	res.send(info = {
	
		t: '+' + doc + '°C'

	});
	//res.sendStatus(200);
});











