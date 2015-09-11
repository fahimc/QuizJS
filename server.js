var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/Dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.post('/service/mailer', function(req, res) {

	console.log(req.body);

	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'entice27.apps@gmail.com',
			pass: 'enticeapps'
		}
	});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Strategic Development <entice27.apps@gmail.com>', // sender address
    to: 'fahim.chowdhury1985@gmail.com', // list of receivers
    subject: 'Quiz Test Results', // Subject line
    text: 'Here is the results', // plaintext body
    html: '<b>Here is the results</b>' // html body
  };

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
	if(error){
		return console.log(error);
	}
	console.log('Message sent: ' + info.response);
	return res.send("done");

});
});

app.listen(3001);
console.log('Listening on port 3001');