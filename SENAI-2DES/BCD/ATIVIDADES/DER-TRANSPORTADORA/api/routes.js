//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const Cliente = require("./src/controller/cliente.js");
const Veiculo = require("./src/controller/veiculo");
const Funcionario = require("./src/controller/funcionario");
const Rota = require("./src/controller/rota");
const Entrega = require("./src/controller/entrega");

//Rota de teste
const teste = (req, res) => {
    res.json("API das 50mil tabelas respondendo!");
}

//Rotas de Saída - Clientes
router.get("/", teste);
router.post("/cliente", Cliente.create);
router.get("/cliente", Cliente.read);
router.put("/cliente/:idCliente", Cliente.update);
router.delete("/cliente/:idCliente", Cliente.del);

//Rotas de Saída - Veiculo
router.get("/", teste);
router.post("/Veiculo", Veiculo.create);
router.get("/Veiculo", Veiculo.read);
router.put("/Veiculo/:placa", Veiculo.update);
router.delete("/Veiculo/:placa", Veiculo.del);

//Rotas de Saída - Funcionário
router.get("/", teste);
router.post("/Funcionario", Funcionario.create);
router.get("/Funcionario", Funcionario.read);
router.put("/Funcionario/:idFuncionario", Funcionario.update);
router.delete("/Funcionario/:idFuncionario", Funcionario.del);

//Rotas de Saída - Rota
router.get("/", teste);
router.post("/Rota", Rota.create);
router.get("/Rota", Rota.read);
router.put("/Rota/:idRota", Rota.update);
router.delete("/Rota/:idRota", Rota.del);

//Rotas de Saída - Entrega
router.get("/", teste);
router.post("/Entrega", Entrega.create);
router.get("/Entrega", Entrega.read);
router.put("/Entrega/:idEntrega", Entrega.update);
router.delete("/Entrega/:idEntrega", Entrega.del);



module.exports = router;