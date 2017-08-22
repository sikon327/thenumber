var express = require('express');
var router = express.Router();
var Redis = require('ioredis');
var redis = new Redis('redis-10505.c10.us-east-1-2.ec2.cloud.redislabs.com:10505');



/* GET home page. */
router.get('/', function(req, res, next) {
	redis.setnx("gameNum", 0);
	res.render('index', { title: 'The Number'});
});

//app-specific api
router.post('/add', function(req, res){
	redis.incrby("gameNum", req.body.num).then(function(result){
		res.send(''+result);
	});
});

router.post('/sub', function(req, res){
	redis.decrby("gameNum", req.body.num).then(function(result){
		res.send(''+result);
	});
});

router.post('/reset', function(req, res){
	redis.set("gameNum", 0).then(function(result){
		redis.get("gameNum").then(function(result){
			res.send(''+result);
		})	
	});
});

router.post('/show', function(req, res){
	redis.get("gameNum").then(function(result){
		res.send(''+result);
	});
});

module.exports = router;
