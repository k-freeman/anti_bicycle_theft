var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/bikeapp');
var users = db.get('users');

router.get('/', function(req,res){
    res.render('register',{title: 'register'});
});

router.post('/',function(req, res){
	users.find({username:req.body.username},{},function(e,docs){
		//check if username is taken
		if(docs.length!=0){
			res.end('this username has already been chosen. Please use another one!');
		}
		else{
			req.loginCookie.user = req.body.username;
			users.insert({username: req.body.username, password: req.body.password}, function(a,b){
				if(a) throw a;});
		res.end('you have been registered');
		}
	});
});

module.exports = router;
