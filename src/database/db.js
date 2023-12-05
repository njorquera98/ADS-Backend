const Sequelize = require('sequelize');
const logger = require('../config/logger');

// const db = new Sequelize('bkfzmgxiczperfw31011', 'ulnv5qdkf9hay84h', 'DhJS1vCVVAQksj38tg19',
//   {
//     host: 'bkfzmgxiczperfw31011-mysql.services.clever-cloud.com',
//     dialect: 'mysql',
//     logging: logger.debug.bind(logger)
//   }
// );

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: logger.debug.bind(logger)
  }
);

module.exports = db;
