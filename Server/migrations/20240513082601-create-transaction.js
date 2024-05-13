'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
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
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      amount: {
        type: Sequelize.STRING,
        defaultValue: '0',
        allowNull: false
      },
      status: {
        type: Sequelize.STRING
      },
      checkoutId: {
        type: Sequelize.UUID
      },
      initiatedAt: {
        type: Sequelize.DATE
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

    await queryInterface.sequelize.query(`
    CREATE OR REPLACE FUNCTION update_updated_at_column()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW."updatedAt" = now();
      RETURN NEW;
    END;
    $$ language 'plpgsql';

    CREATE TRIGGER update_user_updated_at BEFORE UPDATE ON "Transactions"
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
  `);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');

    await queryInterface.sequelize.query(`
    DROP TRIGGER IF EXISTS update_user_updated_at ON "Transactions";
    DROP FUNCTION IF EXISTS update_updated_at_column;
  `);
  }
};
