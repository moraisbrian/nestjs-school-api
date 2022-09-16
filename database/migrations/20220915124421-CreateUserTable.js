module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      Id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Username: Sequelize.DataTypes.STRING(100),
      Password: Sequelize.DataTypes.STRING(100),
      CreatedAt: Sequelize.DataTypes.DATE,
      UpdatedAt: Sequelize.DataTypes.DATE
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
  }
};
