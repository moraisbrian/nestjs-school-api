module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Course', 'CoordinatorId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        key: 'Id',
        model: 'Coordinator',
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Course', 'CoordinatorId');
  }
};
