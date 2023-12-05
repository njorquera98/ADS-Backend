const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./router/v1');
const logger = require('./config/logger');

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
