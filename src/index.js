const express = require('express');
const db = require('./database/db.js');
const models = require('./models');
const app = express();
const port = 3000;
const router = require('./router/routes.js');

app.use(express.json());
app.use(router); // Cambia la ruta base según tus necesidades

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

db.authenticate()
  .then(async () => {
    console.log('Connection has been established successfully.');
    await db.sync();
    console.log('All models were synchronized successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });
