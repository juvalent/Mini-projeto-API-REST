
const { Router } = require('express');
const CursoController = require('../controllers/CursoController');

const router = Router();


router.get('/', CursoController.listAll);          
router.get('/:id', CursoController.getById);       
router.post('/', CursoController.create);          
router.put('/:id', CursoController.update);        
router.delete('/:id', CursoController.remove);    


router.get('/:id/alunos', CursoController.getAlunosMatriculados); 

module.exports = router;