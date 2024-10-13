import fetch from 'node-fetch';

exports.handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required")
    }
  }
  console.log(event.body);
  const requestBody = JSON.parse(event.body);

  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email
  await fetch(`https://lifelinediagnonodejs.netlify.app/.netlify/functions/emails/subscribed`, {
    headers: {
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET
    },
    method: "POST",
    body: JSON.stringify({
      from: "vijayshedge60@gmail.com",
      to: "vijaytshedge2007@yahoo.co.in",
      subject: "Lifeline Inquiry",
      parameters: {
        name: requestBody.subscriberName,
        email: requestBody.subscriberEmail
      }
    })
  })

  return {
    statusCode: 200,
    body: JSON.stringify("Subscribe email sent!")
  }
};