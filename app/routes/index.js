var express = require('express');
var router 	= express.Router();

router.get('/', function(req, res){
	var data 			= req.app.get('appData');
	var pagePhotos 		= [];
	var pageSpeakers	=	data.speakers;

	pageSpeakers.forEach(function(item){
		pagePhotos = pagePhotos.concat(item.artwork);
	});

	res.render('index',{
		pageTitle	: 'Home',
		pageID		: 'home',
		artwork		: pagePhotos,
		speakers 	: pageSpeakers
	});
});

module.exports = router;