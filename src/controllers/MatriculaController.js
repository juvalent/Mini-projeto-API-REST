
const { Matricula, Aluno, Curso } = require('../models'); 
const { Op } = require('sequelize'); 
class MatriculaController {
    
    async create(req, res) {
       
        const { alunoId, cursoId } = req.body; 
        
       
        try {
            const aluno = await Aluno.findByPk(alunoId);
            const curso = await Curso.findByPk(cursoId);

            if (!aluno || !curso) {
                return res.status(404).json({ message: 'Aluno ou Curso não encontrado.' });
            }

           
            const matriculaExistente = await Matricula.findOne({
                where: {
                    alunoId: alunoId,
                    cursoId: cursoId
                }
            });

            if (matriculaExistente) {
                return res.status(409).json({ message: 'Esta matrícula já existe para o aluno e curso fornecidos.' });
            }

            
            const novaMatricula = await Matricula.create({ 
                alunoId, 
                cursoId,
                dataMatricula: new Date() 
            });

           
            return res.status(201).json(novaMatricula);

        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

   
    async remove(req, res) {
        const { id } = req.params;
        try {
            const deleted = await Matricula.destroy({
                where: { id }
            });

            if (deleted) {
                return res.status(204).json(); 
            }
            return res.status(404).json({ message: 'Matrícula não encontrada' });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new MatriculaController();