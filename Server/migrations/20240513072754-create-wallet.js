'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Wallets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',  // Name of the referenced table
          key: 'id'        // Key in the referenced table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      amount: {
        type: Sequelize.STRING,
        defaultValue: '0',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Adding a trigger to automatically update the updatedAt column
    await queryInterface.sequelize.query(`
     CREATE OR REPLACE FUNCTION update_updated_at_column()
     RETURNS TRIGGER AS $$
     BEGIN
       NEW."updatedAt" = now();
       RETURN NEW;
     END;
     $$ language 'plpgsql';

     CREATE TRIGGER update_user_updated_at BEFORE UPDATE ON "Wallets"
     FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
   `);

    await queryInterface.addConstraint('Wallets', {
      fields: ['userId'],
      type: 'unique',
      name: 'unique_userId'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Wallets');

    await queryInterface.sequelize.query(`
    DROP TRIGGER IF EXISTS update_user_updated_at ON "Wallets";
    DROP FUNCTION IF EXISTS update_updated_at_column;
  `);
  }
};
