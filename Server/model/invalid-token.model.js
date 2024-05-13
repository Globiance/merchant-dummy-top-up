const { DataTypes } = require('sequelize');
const { db } = require('../config/database.config')

const InvalidToken = db.define('InvalidToken', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    token: DataTypes.STRING,
}, { timestamps: true });

module.exports = InvalidToken