var pg = require('pg');

// var logger       = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser   = require('body-parser');

var express = require('express');
var cors 	= require('cors');
//var favicon = require('serve-favicon')
var app     = express();
//var port    =   process.env.PORT || 8080;

var port    =   8080;

var router 	= express.Router();

var path 	= require('path');

// ROUTES
// ==============================================

app.use('/public', express.static(__dirname + '/public'));
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

//app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve the static files from the React app

app.use(express.static(path.join(__dirname, '/dist')));

 router.get('/', function(req, res) {
     res.sendFile('index.html');
 });

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
    res.send('im the about page und Redux ---<<->>----->'); 
});

router.get('/text', function(req, res) {
    res.sendFile( __dirname + '/public/favicon.ico' ); 
});

// apply the routes to our application
app.use('/', router);

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);

console.log('Magic happens on port ' + port);