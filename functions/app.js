var express = require('express');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');

app.get('/', function (req, res) {
	app.use(express.static(path.join(__dirname, '../dist')));
	res.sendFile(path.join(__dirname, "../dist/index.html"));
});

var server = app.listen(5000, function () {
	console.log("Express App running at http://127.0.0.1:5000/");
});

app.post('/makeAppointment', function (req, res) {


	res.send('Redirected to netlify function');

});