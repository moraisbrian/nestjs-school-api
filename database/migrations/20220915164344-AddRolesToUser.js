module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('User', 'Roles', {
      type: Sequelize.DataTypes.STRING(255)
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('User', 'Roles');
  }
};
