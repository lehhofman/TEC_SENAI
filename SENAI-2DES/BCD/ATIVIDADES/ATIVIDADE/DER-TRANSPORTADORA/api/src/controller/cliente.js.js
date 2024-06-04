//Dependências - Frameworks
const con = require('../connect/connect');

//CRUD - create
const create = (req, res) => {
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let query = `INSERT INTO Cliente (nome, endereco, telefone, email) VALUE`;
    query += `('${nome}','${endereco}', '${telefone}', '${email}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.idCliente = result.insertidCliente;
            res.status(201).json(novo).end();
        }
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM Cliente ORDER BY idCliente DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Update
const update = (req, res) => {
    let idCliente = req.params.idCliente;
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let telefone = req.body.telefone;
    let email = req.body.email
    let query = `UPDATE Cliente SET nome = '${nome}', endereco = '${endereco}', telefone = '${telefone}', email = '${email}' WHERE idCliente = ${idCliente}`;
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
    let idCliente = req.params.idCliente;
    con.query(`DELETE FROM Cliente WHERE idCliente = ${idCliente}`, (err, result) => {
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