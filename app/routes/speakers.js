var express	= require('express');
var router	= express.Router();

router.get('/speakers',function(req, res){
	var data = req.app.get('appData');
	var pagePhotos = [];
	var pageSpeakers = data.speakers;

	data.speakers.forEach(function(item){
		pagePhotos = pagePhotos.concat(item.artwork);
	});

	res.render('speakers',{
		pageTitle	: 'Speakers',
		pageID		: 'speakerList',
		artwork		: pagePhotos,
		speakers 	: pageSpeakers
	});
});

router.get('/speakers/:speakerid',function(req, res){
	var data 			= req.app.get('appData');
	var pagePhotos 		= [];
	var pageSpeakers 	= [];

	data.speakers.forEach(function(item){
		if(item.shortname == req.params.speakerid){
			pageSpeakers.push(item);
			pagePhotos = pagePhotos.concat(item.artwork);
		}
	});

	res.render('speakers',{
		pageTitle	: 'Speakers Info',
		pageID		: 'speakerDetail',
		artwork		: pagePhotos,
		speakers 	: pageSpeakers
	});
});

module.exports = router;