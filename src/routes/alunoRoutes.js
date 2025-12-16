
const { Router } = require('express');
const AlunoController = require('../controllers/AlunoController');

const router = Router();


router.get('/', AlunoController.listAll);           
router.get('/:id', AlunoController.getById);       
router.post('/', AlunoController.create);          
router.put('/:id', AlunoController.update);        
router.delete('/:id', AlunoController.remove);     

router.get('/:id/cursos', AlunoController.getCursosMatriculados); 

module.exports = router;