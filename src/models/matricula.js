'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    
    static associate(models) {
    
      Matricula.belongsTo(models.Aluno, {
        foreignKey: 'alunoId',
        as: 'aluno' 
      });

      Matricula.belongsTo(models.Curso, {
        foreignKey: 'cursoId',
        as: 'curso' 
      });
      
    }
  }
  Matricula.init({
    dataMatricula: {
        type: DataTypes.DATE,
        allowNull: false
    },
    alunoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cursoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Matricula',
    tableName: 'Matriculas',
    
    
    timestamps: false 
  });
  return Matricula;
};