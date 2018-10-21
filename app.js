var express 	= require('express');
var reload		= require('reload');
var app			= express();
var dataFile	= require('./data/data.json');

app.set('port',process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views'); 

app.locals.siteTitle	=	'Roux Meetups';
app.locals.allSpeakers	=	dataFile.speakers;

app.use(express.static('app/public'));
app.use('./routes/index');
app.use('./routes/speakers');
app.use('./routes/api');
app.use('./routes/feedback');
app.use('./routes/chat');

var server = app.listen(app.get('port'), function(){
	console.log('Listening to port ' + app.get('port'));
});

reload(app);