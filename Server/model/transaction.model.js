const { DataTypes } = require('sequelize');
const { db } = require('../config/database.config');

const Transaction = db.define('Transaction', {
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
    status: DataTypes.STRING,

    checkoutId: DataTypes.UUID,

    initiatedAt: DataTypes.DATE
}, {
    timestamps: true       
});

module.exports = Transaction;
