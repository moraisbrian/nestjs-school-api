module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('CourseClassRoom', {
      Id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      CourseId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          key: 'Id',
          model: 'Course',
        }
      },
      ClassRoomId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          key: 'Id',
          model: 'ClassRoom',
        }
      },
      CreatedAt: Sequelize.DataTypes.DATE,
      UpdatedAt: Sequelize.DataTypes.DATE
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('CourseClassRoom');
  }
};

