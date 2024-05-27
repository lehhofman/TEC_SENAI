const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'hortifruti'
});

const teste = (req, res) => {
    res.send("Back-end respondendo");
}

const readOne = (req, res) => {
    let id = req.params.id;
    con.query(`SELECT * FROM produtos WHERE id = ${id}`, (err, result) => {
        if (err)
            res.status(500).json({ error: 'Erro ao ler produto do banco de dados' });
        else {
            if (result.length > 0)
                res.status(200).json(result[0]);
            else
                res.status(404).json({ error: 'Produto não encontrado' });
        }
    });
}

// CRUD - Create
const create = (req, res) => {
    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let produtos = req.body.produtos;
    let valor = parseFloat(req.body.valor);
    let quantidade = parseInt(req.body.quantidade);
    let total = parseFloat(req.body.total);
    let data = req.body.data;

    let query = `INSERT INTO produtos (cpf, nome, produtos, valor, quantidade, total, data) VALUES `;
    query += `('${cpf}', '${nome}', '${produtos}', ${valor}, ${quantidade}, ${total}, '${data}')`;
    
    con.query(query, (err, result) => {
        if (err)
            res.redirect("http://127.0.0.1:5500/front/erro.html?erro=Provalmente o CPF já está cadastrado&err=");
        else
            res.redirect("http://127.0.0.1:5500/front/index.html");
    });
}

// CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM produtos", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

// CRUD - Update
const update = (req, res) => {
    let id = req.params.id;
    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let produtos = req.body.produtos;
    let valor = parseFloat(req.body.valor);
    let quantidade = parseInt(req.body.quantidade);
    let total = parseFloat(req.body.total);
    let data = req.body.data;

    let query = `UPDATE produtos SET cpf = '${cpf}', nome = '${nome}', produtos = '${produtos}', valor = '${valor}', quantidade = '${quantidade}', total = '${total}', data = '${data}' WHERE id = ${id}`;

    con.query(query, (err, result) => {
        if (err)
            res.json(err);
        else {
            if (result.affectedRows > 0)
                res.json(result);
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });
}

// CRUD - Delete
const del = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM produtos WHERE id = ${id}`, (err, result) => {
        if (err)
            res.json(err);
        else {
            if (result.affectedRows > 0)
                res.json(result);
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });
}

// Frontend Output Settings
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Frontend Output Routes
app.get("/", teste);
app.post("/produtos", create);
app.get("/produtos", read); // Rota para todos os produtos
app.get("/produtos/:id", readOne); // Rota para um produto específico pelo ID
app.put("/produtos/:id", update);
app.delete("/produtos/:id", del);

// Test and port log
app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});