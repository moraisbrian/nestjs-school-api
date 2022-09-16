module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Coordinator', {
      Id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      FirstName: Sequelize.DataTypes.STRING(100),
      LastName: Sequelize.DataTypes.STRING(100),
      CreatedAt: Sequelize.DataTypes.DATE,
      UpdatedAt: Sequelize.DataTypes.DATE
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Coordinator');
  }
};
