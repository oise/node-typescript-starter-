module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      pwd: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      languageId: {
        type: Sequelize.UUID,
        allowNull: false
      }
    })
  ,
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')
}
