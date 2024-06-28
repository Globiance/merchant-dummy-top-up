const { DataTypes } = require('sequelize');
const { db } = require('../config/database.config');

const Wallet = db.define('Wallet', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {           
            model: 'Users',  
            key: 'id'
        }
    },
    amount: {
        type: DataTypes.STRING,
        defaultValue: '0',      
        allowNull: false
    },
}, {
    timestamps: true       
});

module.exports = Wallet;
