// module req express + express.Router()

var express = require ('express');
ctrl = express.Router();

ctrl.get('/', function(req, res, next){
	res.render('index', {
		message: 'It is Russell\'s birthday'
	});
});

ctrl.get('/home', function(req, res, next){
	res.render(('hello', {
		name: "Homer Simpson",
		adjective: "funny",
		framework: "Express.js"
	}));
	
});

// export controller
module.exports = ctrl;


