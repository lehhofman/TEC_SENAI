//Dependências - Frameworks
const con = require('../connect/connect');

//CRUD - create
const create = (req, res) => {
    let origem = req.body.origem;
    let destino = req.body.destino;
    let distancia = req.body.distancia;
    let query = `INSERT INTO Rota (origem, destino, distancia) VALUE`;
    query += `('${origem}','${destino}', '${distancia}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.idRota = result.insertidRota;
            res.status(201).json(novo).end();
        }
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM Rota ORDER BY idRota DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Update
const update = (req, res) => {
    let idRota = req.params.idRota;
    let origem = req.body.origem;
    let destino = req.body.destino;
    let distancia = req.body.distancia;
    let query = `UPDATE Rota SET origem = '${origem}', destino = '${destino}', distancia = '${distancia}' WHERE idRota = ${idRota}`;
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
    let idRota = req.params.idRota;
    con.query(`DELETE FROM Rota WHERE idRota = ${idRota}`, (err, result) => {
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