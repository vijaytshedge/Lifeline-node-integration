var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
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
