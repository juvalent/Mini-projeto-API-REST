'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataMatricula: {
        allowNull: false,
        type: Sequelize.DATE
      },
      alunoId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
      model: 'Alunos', 
      key: 'id'
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
},
      cursoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cursos', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matriculas');
  }
};