
var nodemailer = require('nodemailer');
exports.handler = async (event, context) => {

    console.log("==>  " + JSON.stringify(event));
    console.log("==>  " + JSON.stringify(context));
    console.log("method:  " + event.httpMethod); 
    if (event.httpMethod == 'POST') {
        console.log("method: POST"); 
    }
    if (event.httpMethod !== 'POST') {
        console.log("method: :("); 
    }

    var htmlBody = event.body;
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

	
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
			return {
                statusCode: 200,
                body: JSON.stringify({
                  message: "Technical error. Please try again."
                })
            };
		} else {
			console.log('Email sent: ' + info.response);
			return {
                statusCode: 200,
                body: JSON.stringify({
                  message: "Email sent. Our representive will call you soon."
                })
            };
		}
	});

    return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Our representive will call you soon."
        })
    };
  };
  