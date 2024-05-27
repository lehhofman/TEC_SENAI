const express = require('express');
const routes = express.Router(); 

const Cliente = require('./controllers/cliente');
const Telefone = require('./controllers/telefone');
const Veiculo = require('./controllers/veiculo');
const Reserva = require('./controllers/reserva');

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

// Rotas para reservas
routes.post('/reserva', Reserva.addReserva);
routes.get('/reserva', Reserva.getReserva);
routes.get('/reserva/reservados', Reserva.mostrarReservados);
routes.get('/reserva/alugados', Reserva.mostrarAlugados);
routes.put('/reserva/:cpf', Reserva.updateReserva);
routes.delete('/reserva/:cpf', Reserva.deleteReserva);


module.exports = routes;
