var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

var server = app.listen(5000, function () {
    console.log("Express App running at http://127.0.0.1:5000/");
});


app.get('/send', function (req, res) {

    const TelegramBot = require('node-telegram-bot-api');
    const token = '7491411525:AAHIS54W1ujYrXHBWhJyk3zidvO0cpT_b2M';
    const bot = new TelegramBot(token, { polling: true });

    bot.sendMessage('USER_CHAT_ID', 'Hello, this is a message from your Telegram bot.');
});

app.post('/makeAppointment', function(req, res){
    console.log(req);
	console.log(JSON.stringify(req));
	var htmlBody = "";
	res.send('Success. Register up called');
	if (customerData.fullName)
		htmlBody = "<p>Customer Name: " + customerData.fullName + "</p>";
	if (customerData.email)
		htmlBody += "<p>Customer Email: " + customerData.email + "</p>";
	if (customerData.mobileNumber)
		htmlBody += "<p>Customer mobile number: " + customerData.mobileNumber + "</p>";
	if (customerData.message)
		htmlBody += "<p>Customer mobile number: " + customerData.mobileNumber + "</p>";
	
    var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'vijaytshedge@gmail.com',
			pass: 'tukaram1241988'
		}
	});

	var mailOptions = {
		from: 'vijaytshedge@gmail.com',
		to: 'vijaytshedge2007@yahoo.co.in',
		subject: 'Fibota enquiry!!!',
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