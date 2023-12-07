const path = require('path');
const express = require('express');
const Mailgun = require('mailgun-js');
// init express
const app = express();
// Your api key, from Mailgun’s Control Panel
const apiKey = 'MAILGUN-API-KEY';
// Your domain, from the Mailgun Control Panel
const domain = 'YOUR-DOMAIN.com';
// Your sending email address
const fromWho = 'your@email.com';
// Tell express to fetch files from the /js directory
app.use(express.static(path.join(__dirname, '/js')));
// We're using the Jade templating language because it's fast and neat
app.set('view engine', 'jade');
// Do something when you're landing on the first page
app.get('/', function (req, res) {
  // render the index.jade file - input forms for humans
  res.render('index', function (err, html) {
    if (err) {
      //  log any error to the console for debug
      console.log(err);
    } else {
      // no error, so send the html to the browser
      res.send(html);
    }
  });
});
//  Send a message to the specified email address when you navigate to /submit/someaddr@email.com
//  The index redirects here
app.get('/submit/:mail', function (req, res) {
  // We pass the apiKey and domain to the wrapper, or it won't be able to identify + send emails
  const mailgun = new Mailgun({ apiKey: apiKey, domain: domain });
  const data = {
    // Specify email data
    from: fromWho,
    // The email to contact
    to: req.params.mail,
    // Subject and text data
    subject: 'Hello from Mailgun',
    html:
      'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http:// 0.0.0.0:0/validate?' +
      req.params.mail +
      '">Click here to add your email address to a mailing list</a>'
  };
  // Invokes the method to send emails given the above data with the helper library
  mailgun.messages().send(data, function (err, body) {
    // If there is an error, render the error page
    if (err) {
      res.render('error', { error: err });
      console.log('got an error: ', err);
    } else {
      // Here 'submitted.jade' is the view file for this landing page
      // We pass the constiable 'email' from the url parameter in an object rendered by Jade
      res.render('submitted', { email: req.params.mail });
      console.log(body);
    }
  });
});

app.get('/validate/:mail', function (req, res) {
  const mailgun = new Mailgun({ apiKey: apiKey, domain: domain });
  const members = [
    {
      address: req.params.mail
    }
  ];
  // For the sake of this tutorial you need to create a mailing list on Mailgun.com/cp/lists and put its address below
  mailgun
    .lists('NAME@MAILINGLIST.COM')
    .members()
    .add({ members: members, subscribed: true }, function (err, body) {
      console.log(body);
      if (err) {
        res.send('Error - check console');
      } else {
        res.send('Added to mailing list');
      }
    });
});

app.get('/invoice/:mail', function (req, res) {
  // Which file to send? I made an empty invoice.txt file in the root directory
  // We required the path module here..to find the full path to attach the file!
  const path = require('path');
  const fp = path.join(__dirname, 'invoice.txt');
  // Settings
  const mailgun = new Mailgun({ apiKey: apiKey, domain: domain });

  const data = {
    from: fromWho,
    to: req.params.mail,
    subject: 'An invoice from your friendly hackers',
    text: 'A fake invoice should be attached, it is just an empty text file after all',
    attachment: fp
  };

  // Sending the email with attachment
  mailgun.messages().send(data, function (error, body) {
    if (error) {
      res.render('error', { error: error });
    } else {
      res.send('Attachment is on its way');
      console.log('attachment sent', fp);
    }
  });
});

app.listen();
