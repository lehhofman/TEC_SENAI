const con = require("../connect/connect").con;

const create = (req, res) => {

    let id = req.body.id;
    let nome = req.body.nome;
    let telefone = req.body.telefone;
    let endereco = req.body.endereco;
    let query = `INSERT INTO item(id, nome, telefone, endereco) VALUE`;

    query += `('${id}', '${nome}', '${telefone}', '${endereco}');`;

    con.query(query, (err, result) => {

        if (err)

            res.status(400).json(err).end();

        else {

            const novo = req.body;

            novo.id = result.insertId;
            res.status(201).json(novo).end();

        }

    });

}

const read = (req, res) => {

    con.query("SELECT * FROM fornecedor ORDER BY id DESC", (err, result) => {

        if (err)

            res.json(err);

        else

            res.json(result);

    });

}

const update = (req, res) => {

    let id = req.params.id;
    let nome = req.body.nome;
    let telefone = req.body.telefone;
    let endereco = req.body.endereco;
    let query = `UPDATE item SET id = '${id}', nome = '${nome}', telefone = '${telefone}', endereco = '${endereco}' WHERE id = ${id}`;

    con.query(query, (err, result) => {

        if (err)

            res.status(400).json(err).end;

        else {

            if (result.affectedRows > 0)

                res.status(202).json(req.body).end();

            else

                res.status(404).json("Registro não encontrado").end();

        }

    });

}

const del = (req, res) => {

    let id = req.params.id;

    con.query(`DELETE FROM item WHERE id = ${id}`, (err, result) => {

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