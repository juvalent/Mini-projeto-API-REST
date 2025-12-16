
const { Router } = require('express');
const MatriculaController = require('../controllers/MatriculaController');

const router = Router();


router.post('/', MatriculaController.create);      
router.delete('/:id', MatriculaController.remove);

module.exports = router;