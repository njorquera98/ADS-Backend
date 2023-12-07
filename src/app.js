const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./router/v1');
const logger = require('./config/logger');

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

const db = require('./database/db');
// eslint-disable-next-line no-unused-vars
const models = require('./models');

const app = express();
// enable cors
app.use(cors());
app.options('*', cors());

app.use(morgan('tiny'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/v1', routes);

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
  // next(new Error('Not found'));
});

// Your api key, from Mailgun’s Control Panel
const apiKey = process.env.MAILGUN_API;
// Your domain, from the Mailgun Control Panel
const domain = process.env.MAILGUN_DOMAIN;
// Your sending email address
const fromWho = process.env.SENDER_EMAIL;

app.post('/submit/:mail', function (req, res) {
  console.log(apiKey, domain, fromWho);
  // We pass the apiKey and domain to the wrapper, or it won't be able to identify + send emails
  const mg = mailgun.client({ username: 'api', key: apiKey });

  mg.messages.create(domain, {
    from: fromWho,
    to: [req.params.mail],
    subject: 'ADS Event!',
    text: 'ADS Notificaciones',
    html: `<h1>${req.body.content}</h1>`
  })
    .then(msg => {
      res.send(req.params.mail);
      console.log(msg);
    }) // logs response data
    .catch(err => {
      res.send(err);
      console.log('got an error: ', err);
    }); // logs any error
});

app.listen(process.env.PORT, () => {
  logger.info(` App is running at http://localhost:${process.env.PORT} in ${app.get('env')} mode`);
});

db.authenticate().then(async () => {
  logger.info('Connection has been established successfully.');
  await db.sync();
  logger.info('All models were synchronized successfully.');
}).catch((error) => {
  logger.error('Unable to connect to the database: ', error);
});

module.exports = app;
