   const { Sequelize } = require('sequelize');
   const config = require('../config/database.js');

   const sequelize = new Sequelize(
     config.development.database,
     config.development.username,
     config.development.password,
     {
       host: config.development.host,
       dialect: 'postgres'
     }
   );

   module.exports = sequelize;