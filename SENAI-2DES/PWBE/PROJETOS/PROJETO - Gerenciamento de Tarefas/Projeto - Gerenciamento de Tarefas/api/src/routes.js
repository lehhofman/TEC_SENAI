const express = require('express');
const router = express.Router(); 

const Usuario = require('./controllers/usuarios');
const Tarefa = require('./controllers/tarefas');

router.get('/', (req, res) => {
    res.json("API Gerenciamento de Tarefas");
});

// Rotas para usuários
router.post('/login', Usuario.login);
router.post('/usuarios', Usuario.addUsuario);
router.get('/usuarios/:id', Usuario.getUsuarios);
router.put('/usuarios/:id', Usuario.updateUsuario);
router.delete('/usuarios/:id', Usuario.deleteUsuario);

// Rotas para tarefas
router.post('/tarefas', Tarefa.addTarefa);
router.get('/tarefas/:id', Tarefa.getTarefas);
router.put('/tarefas/:id', Tarefa.updateTarefa);
router.delete('/tarefas/:id', Tarefa.deleteTarefa);

module.exports = router;
