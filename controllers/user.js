var express = require('express');
var ctrl = express.Router();
var users =[

{  username: "anita wright",
	password: "helloworld"

},
{
	username: "anita wright",
	password: "helloworld"
},
{

	username: "anita wright",
	password: "helloworld"
}

]
ctrl.get('/', function(req, res, next){
	res.json(users);
});

ctrl.get('/1', function(req, res, next) {
    res.json(users[0]);
});
ctrl.get('/2', function(req, res, next) {
    res.json(users[1]);
});
ctrl.get('/3', function(req, res, next) {
    res.json(users[2]);
});

module.exports = ctrl;

