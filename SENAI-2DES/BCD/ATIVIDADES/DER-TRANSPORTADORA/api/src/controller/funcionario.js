//Dependências - Frameworks
const con = require('../connect/connect');

//CRUD - create
const create = (req, res) => {
    let nome = req.body.nome;
    let cargo = req.body.cargo;
    let salario = req.body.salario;
    let query = `INSERT INTO Funcionario (nome, cargo, salario) VALUE`;
    query += `('${nome}','${cargo}', '${salario}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.idFuncionario = result.insertidFuncionario;
            res.status(201).json(novo).end();
        }
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM Funcionario ORDER BY idFuncionario DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Update
const update = (req, res) => {
    let idFuncionario = req.params.idFuncionario;
    let nome = req.body.nome;
    let cargo = req.body.cargo;
    let salario = req.body.salario;
    let query = `UPDATE Funcionario SET nome = '${nome}', cargo = '${cargo}', salario = '${salario}' WHERE idFuncionario = ${idFuncionario}`;
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
    let idFuncionario = req.params.idFuncionario;
    con.query(`DELETE FROM Funcionario WHERE idFuncionario = ${idFuncionario}`, (err, result) => {
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