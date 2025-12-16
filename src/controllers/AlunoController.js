
const { Aluno, Curso } = require('../models');

class AlunoController {
    
    async listAll(req, res) {
        try {
            const alunos = await Aluno.findAll();
            return res.status(200).json(alunos);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    
    async getById(req, res) {
        const { id } = req.params;
        try {
            const aluno = await Aluno.findByPk(id);
            if (!aluno) {
                return res.status(404).json({ message: 'Aluno não encontrado' });
            }
            return res.status(200).json(aluno);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    // 3. Criar um novo aluno (POST /alunos)
    async create(req, res) {
        const { nome, email } = req.body;
        try {
            const novoAluno = await Aluno.create({ nome, email });
            return res.status(201).json(novoAluno);
        } catch (error) {
            // Sequelize lida automaticamente com erros de validação (e-mail único)
            return res.status(400).json({ message: error.message }); 
        }
    }

    // 4. Atualizar um aluno (PUT /alunos/:id)
    async update(req, res) {
        const { id } = req.params;
        const { nome, email } = req.body;
        try {
            const [updated] = await Aluno.update({ nome, email }, {
                where: { id }
            });

            if (updated) {
                const alunoAtualizado = await Aluno.findByPk(id);
                return res.status(200).json(alunoAtualizado);
            }
            return res.status(404).json({ message: 'Aluno não encontrado' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    // 5. Remover um aluno (DELETE /alunos/:id)
    async remove(req, res) {
        const { id } = req.params;
        try {
            const deleted = await Aluno.destroy({
                where: { id }
            });

            if (deleted) {
                // Devido ao 'onDelete: CASCADE' na migração, as matrículas associadas também serão deletadas.
                return res.status(204).json(); 
            }
            return res.status(404).json({ message: 'Aluno não encontrado' });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    
    // 6. Listar cursos de um aluno (GET /alunos/:id/cursos)
    async getCursosMatriculados(req, res) {
        const { id } = req.params;
        try {
            const aluno = await Aluno.findByPk(id, {
                // Inclui todos os cursos onde este aluno está matriculado, usando o alias 'cursosMatriculados'
                include: [{ 
                    model: Curso, 
                    as: 'cursosMatriculados',
                    attributes: ['id', 'nome', 'cargaHoraria', 'modalidade'], // Opcional: define quais campos do Curso carregar
                    through: { attributes: ['dataMatricula'] } // Opcional: carrega o campo da tabela de junção (Matricula)
                }]
            });

            if (!aluno) {
                return res.status(404).json({ message: 'Aluno não encontrado' });
            }

            // Retorna apenas a lista de cursos (ou o objeto aluno completo se preferir)
            return res.status(200).json(aluno.cursosMatriculados); 

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new AlunoController();