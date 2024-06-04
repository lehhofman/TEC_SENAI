//Dependências - Frameworks
const con = require('../connect/connect');

//CRUD - create
const create = (req, res) => {
    let placa = req.body.placa;
    let modelo = req.body.modelo;
    let capacidade = req.body.capacidade;
    let query = `INSERT INTO Veiculo (placa, modelo, capacidade) VALUE`;
    query += `('${placa}','${modelo}', '${capacidade}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else
            res.status(201).json(req.body).end();
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM Veiculo", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Update
const update = (req, res) => {
    let placa = req.body.placa;
    let modelo = req.body.modelo;
    let capacidade = req.body.capacidade;
    //Mesmo erro, pega a placa inteira mas só pega até as partes antes do -
    let query = `UPDATE Veiculo SET placa = '${placa}', modelo = '${modelo}', capacidade = '${capacidade}' WHERE placa = ${placa}`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            if (result.affectedRows > 0)
                res.status(202).json(req.body).end();
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });
}

//CRUD - Delete
const del = (req, res) => {
    let placa = req.params.placa;
    console.log(placa)
    //está pegando a placa inteira porem na hora de deletar ele pega somente a parte antes do -
    con.query(`DELETE FROM Veiculo WHERE placa = ${placa}`, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            if (result.affectedRows > 0)
                res.status(204).json(result).end();
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });
}

module.exports = {
    create,
    read,
    update,
    del
};