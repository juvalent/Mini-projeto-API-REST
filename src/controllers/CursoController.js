
const { Curso, Aluno } = require('../models'); 

class CursoController {
    
    async listAll(req, res) {
        try {
            const cursos = await Curso.findAll();
            return res.status(200).json(cursos);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

   
    async getById(req, res) {
        const { id } = req.params;
        try {
            const curso = await Curso.findByPk(id);
            if (!curso) {
                return res.status(404).json({ message: 'Curso não encontrado' });
            }
            return res.status(200).json(curso);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async create(req, res) {
        const { nome, cargaHoraria, modalidade } = req.body;
        try {
            const novoCurso = await Curso.create({ nome, cargaHoraria, modalidade });
            return res.status(201).json(novoCurso);
        } catch (error) {
            return res.status(400).json({ message: error.message }); 
        }
    }

    
    async update(req, res) {
        const { id } = req.params;
        const { nome, cargaHoraria, modalidade } = req.body;
        try {
            const [updated] = await Curso.update({ nome, cargaHoraria, modalidade }, {
                where: { id }
            });

            if (updated) {
                const cursoAtualizado = await Curso.findByPk(id);
                return res.status(200).json(cursoAtualizado);
            }
            return res.status(404).json({ message: 'Curso não encontrado' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    
    async remove(req, res) {
        const { id } = req.params;
        try {
            const deleted = await Curso.destroy({
                where: { id }
            });

            if (deleted) {
                
                return res.status(204).json(); 
            }
            return res.status(404).json({ message: 'Curso não encontrado' });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    
    async getAlunosMatriculados(req, res) {
        const { id } = req.params;
        try {
            const curso = await Curso.findByPk(id, {
                
                include: [{ 
                    model: Aluno, 
                    as: 'alunosMatriculados',
                    attributes: ['id', 'nome', 'email'],
                    through: { attributes: ['dataMatricula'] } 
                }]
            });

            if (!curso) {
                return res.status(404).json({ message: 'Curso não encontrado' });
            }

            
            return res.status(200).json(curso.alunosMatriculados); 

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new CursoController();