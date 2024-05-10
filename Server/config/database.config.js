const Sequelize = require('sequelize')
require('dotenv').config()

async function dbConnection() {
    try {
        const sequelize = new Sequelize({
            host: process.env.DB_HOST,
            dialect: 'postgres',
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: process.env.DB_PORT
            // "logging": true,
        });

        await sequelize.authenticate();
        console.log("DB Connection Working!");
    } catch (error) {
        console.log(error.message);
    }

}

const db = new Sequelize({
    host: process.env.DB_HOST,
    dialect: 'postgres',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});



module.exports = { dbConnection, db }
