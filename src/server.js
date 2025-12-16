const express = require('express');
const db = require('./models'); 
const alunoRoutes = require('./routes/alunoRoutes'); 
const cursoRoutes = require('./routes/cursoRoutes');
const matriculaRoutes = require('./routes/matriculaRoutes');

const app = express();

app.use(express.json()); 

app.use('/alunos', alunoRoutes);
app.use('/cursos', cursoRoutes);
app.use('/matriculas', matriculaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});