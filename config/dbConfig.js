require("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE,process.env.DB_USERNAME,process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    dialectOptions: {
        connectTimeout: 86400
    }
  });

  async function connectionToDb(){
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } 
      catch (error) {
        console.error(error.message);
      }
  }
  

  module.exports = {
    connectionToDb,
    sequelize
  }