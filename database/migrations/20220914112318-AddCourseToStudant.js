module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Studant', 'CourseId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        key: 'Id',
        model: 'Course',
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Studant', 'CourseId');
  }
};
