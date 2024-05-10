const { Sequelize, Model, DataTypes } = require('sequelize');
const { db } = require('../config/database.config')

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: DataTypes.TEXT
}, { timestamps: true });

module.exports = User