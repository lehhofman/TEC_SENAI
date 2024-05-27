const express = require('express');
const routes = express.Router(); 

const Cliente = require('./controllers/cliente');
const Telefone = require('./controllers/telefone');
const Veiculo = require('./controllers/veiculo');
const Aluguel = require('./controllers/aluguel'); 

routes.get('/', (req, res) => {
    res.json("aluguel");
});

// Rotas para clientes
routes.post('/clientes', Cliente.addCliente);
routes.get('/clientes/:cpf', Cliente.getCliente);
routes.put('/clientes/:cpf', Cliente.updateCliente);
routes.delete('/clientes/:cpf', Cliente.deleteCliente);

// Rotas para telefones
routes.post('/telefones', Telefone.addTelefone);
routes.get('/telefones/:cpf', Telefone.getTelefones);
routes.put('/telefones/:cpf', Telefone.updateTelefone);
routes.delete('/telefones/:cpf', Telefone.deleteTelefone);

// Rotas para veículos
routes.post('/veiculos', Veiculo.addVeiculo);
routes.get('/veiculos/:placa', Veiculo.getVeiculos);
routes.put('/veiculos/:placa', Veiculo.updateVeiculo);
routes.delete('/veiculos/:placa', Veiculo.deleteVeiculo);

// Rotas para aluguéis
routes.post('/alugueis', Aluguel.addAluguel);
routes.get('/alugueis', Aluguel.getAluguel);
routes.get('/alugueis/reservados', Aluguel.mostrarReservados);
routes.get('/alugueis/alugados', Aluguel.mostrarAlugados);
routes.put('/alugueis/:id', Aluguel.updateAluguel);
routes.delete('/alugueis/:id', Aluguel.deleteAluguel);

module.exports = routes;
