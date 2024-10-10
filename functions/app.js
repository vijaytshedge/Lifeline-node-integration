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

app.post('/makeAppointment', function(req, res){
	var htmlBody = "test";
	/* res.send('Success. Register up called');
	if (customerData.fullName)
		htmlBody = "<p>Customer Name: " + customerData.fullName + "</p>";
	if (customerData.email)
		htmlBody += "<p>Customer Email: " + customerData.email + "</p>";
	if (customerData.mobileNumber)
		htmlBody += "<p>Customer mobile number: " + customerData.mobileNumber + "</p>";
	if (customerData.message)
		htmlBody += "<p>Customer mobile number: " + customerData.mobileNumber + "</p>";
	*/

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		auth: {
		  user: 'vijaytshedge@gmail.com',
		  pass: 'nwlvhsktdpyguams',
		},
	  });
	var mailOptions = {
		from: 'vijaytshedge@gmail.com',
		to: 'vijaytshedge2007@yahoo.co.in',
		subject: 'Lifeline inquiry',
		html: htmlBody
	};

	console.log(mailOptions);

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
			res.send('Error. Register up called');
		} else {
			console.log('Email sent: ' + info.response);
			res.send('Success. Register up called');
		}
	});
});