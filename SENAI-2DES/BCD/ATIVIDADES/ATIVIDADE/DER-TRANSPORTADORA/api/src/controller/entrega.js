const con = require('../connect/connect');

//CRUD - create
const create = (req, res) => {
    let placa = req.body.placa;
    let motorista = req.body.motorista;
    let idRota = req.body.idRota;
    let inicio = req.body.inicio;
    let fim = req.body.fim;
    let status = req.body.status;
    let query = `INSERT INTO Entrega (placa, motorista,idRota, inicio, fim, status) VALUE`;
    query += `('${placa}','${motorista}', '${idRota}', '${inicio}', '${fim}', '${status}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.idEntrega = result.insertidEntrega;
            res.status(201).json(novo).end();
        }
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM Entrega ORDER BY idEntrega DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Update
const update = (req, res) => {
    let idEntrega = req.params.idEntrega;
    let placa = req.body.placa;
    let motorista = req.body.motorista;
    let idRota = req.body.idRota
    let inicio = req.body.inicio;
    let fim = req.body.fim;
    let status = req.body.status;
    let query = `UPDATE Entrega SET placa = '${placa}', motorista = '${motorista}', rota = '${idRota}', inicio = '${inicio}', fim = '${fim}' status = '${status}' WHERE idEntrega = ${idEntrega}`;
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
    let idEntrega = req.params.idEntrega;
    con.query(`DELETE FROM Entrega WHERE idEntrega = ${idEntrega}`, (err, result) => {
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