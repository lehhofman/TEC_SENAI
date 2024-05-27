const express = require('express');
const routes = express.Router();

const Usuario = require('./controllers/usuario');
const Tarefa = require('./controllers/tarefa');

routes.get('/', (req, res) => {
    res.json("API Tarefas 1.0")
});

routes.post('/usuarios/login', Usuario.login);
routes.post('/usuarios', Usuario.addUsuario);
routes.get('/usuarios', Usuario.getUsuarios);
routes.get('/usuarios/:id', Usuario.getUsuarios);
routes.put('/usuarios', Usuario.updateUsuario);
routes.delete('/usuarios/:id', Usuario.deleteUsuario);

routes.post('/tarefas', Tarefa.addTarefa);
routes.get('/tarefas', Tarefa.getTarefas);
routes.get('/tarefas/:id', Tarefa.getTarefas);
routes.put('/tarefas', Tarefa.updateTarefa);
routes.delete('/tarefas/:id', Tarefa.deleteTarefa);

module.exports = routes;