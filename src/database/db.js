const Sequelize = require('sequelize');
// const seed = require('./seeds');

// const db = new Sequelize('bkfzmgxiczperfw31011', 'ulnv5qdkf9hay84h', 'DhJS1vCVVAQksj38tg19',
//   {
//     host: 'bkfzmgxiczperfw31011-mysql.services.clever-cloud.com',
//     dialect: 'mysql'
//   }
// );
const db = new Sequelize(
  'b0wbaid29nzgjzycshh2',
  'ulm7nz4cjafrzipl',
  'Acuqq8qhDiDGIb0XSEcM',
  {
    host: 'b0wbaid29nzgjzycshh2-mysql.services.clever-cloud.com',
    dialect: 'mysql',
  }
);

module.exports = db;
