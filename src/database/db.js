const Sequelize = require("sequelize");

const db = new Sequelize('bkfzmgxiczperfw31011', 'ulnv5qdkf9hay84h', 'DhJS1vCVVAQksj38tg19',
  {
    host: 'bkfzmgxiczperfw31011-mysql.services.clever-cloud.com',
    dialect: 'mysql'
  }
);

db.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

module.exports = db;

