var express = require ('express');
var ctrl = express.Router();


//data for our routes

var data = [
{
	name: 'Northcoast Music Festival',
	location: 'Union Park',
	notes: 'wu tang clan'
},
{
	name: 'spring awakening',
	location:'home',
	notes: 'eating cake'

},
{
	name: 'anita wright',
	location: 'ireland',
	notes: 'love it'
}

];

// build first real api

ctrl.get('/', function(req, res, next){
	res.json(data);
});

ctrl.get('/1', function(req, res, next){
	res.json(data[0]);
});

ctrl.get('/2', function(req, res, next){
	res.json(data[1]);
});

ctrl.get('/3', function(req, res, next){
	res.json(data[2]);
});



module.exports = ctrl;