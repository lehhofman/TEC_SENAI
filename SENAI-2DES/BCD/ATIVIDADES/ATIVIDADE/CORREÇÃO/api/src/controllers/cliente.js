const con = require("../connect/connect").con;

const create = (req, res) => {
    const { id, nome, telefone, produto, quantidade, valor } = req.body;
    const query = `INSERT INTO item(id, nome, telefone, produto, quantidade, valor) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [id, nome, telefone, produto, quantidade, valor];

    con.query(query, values, (err, result) => {
        if (err) {
            res.status(400).json({ error: "Erro ao inserir o produto" });
        } else {
            const novo = { id, nome, telefone, produto, quantidade, valor };
            novo.id = result.insertId;
            res.status(201).json(novo);
        }
    });
};

module.exports = {
    create
};
const read = (req, res) => {

    con.query("SELECT * FROM cliente ORDER BY id DESC", (err, result) => {

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
    let produto = req.body.produto;
    let quantidade = req.body.quantidade;
    let valor = req.body.valor
    let query = `UPDATE item SET id = '${id}', nome = '${nome}', telefone = '${telefone}', produto = '${produto}', quantidade = '${quantidade}', valor = '${valor}' WHERE id = ${id}`;

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