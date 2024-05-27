const express = require('express');
const routes = express.Router();

const fornecedorController = require('./controllers/fornecedor');
const clienteController = require('./controllers/cliente');
const produtoController = require('./controllers/produto');

const test = (req, res) => {
    res.send('Backend: Respondendo! 👍');
}

// Rotas de Cliente
routes.get('/cliente', test);
routes.post('/api/cliente', clienteController.create);
routes.get('/api/cliente', clienteController.read);
routes.put('/api/cliente/:id', clienteController.update);
routes.delete('/api/cliente/:id', clienteController.del);

// Rotas de Fornecedor
routes.get('/fornecedor', test);
routes.post('/api/fornecedor', fornecedorController.create);
routes.get('/api/fornecedor', fornecedorController.read);
routes.put('/api/fornecedor/:id', fornecedorController.update);
routes.delete('/api/fornecedor/:id', fornecedorController.del);

// Rotas de Produto
routes.get('/produto', test);
routes.post('/api/produto', produtoController.create);
routes.get('/api/produto', produtoController.read);
routes.put('/api/produto/:id', produtoController.update);
routes.delete('/api/produto/:id', produtoController.del);

module.exports = routes;