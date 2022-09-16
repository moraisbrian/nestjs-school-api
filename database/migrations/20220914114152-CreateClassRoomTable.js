module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ClassRoom', {
      Id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Identification: Sequelize.DataTypes.STRING(100),
      CreatedAt: Sequelize.DataTypes.DATE,
      UpdatedAt: Sequelize.DataTypes.DATE
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ClassRoom');
  }
};
