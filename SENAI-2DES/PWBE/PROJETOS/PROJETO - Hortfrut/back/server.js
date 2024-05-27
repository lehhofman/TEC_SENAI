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

    res.send("Back-end respondendo ");

}

// CRUD - create

const create = (req, res) => {

    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let produtos = req.body.produtos; 
    let valor = parseFloat(req.body.valor); 
    let quantidade = parseInt(req.body.quantidade); 
    let total = parseFloat(req.body.total); 
    let data = req.body.data;
    
    let query = `INSERT INTO produtos (cpf, nome, produtos, valor, quantidade, total, data) VALUES `;
    query += `('${cpf}', '${nome}', '${produtos}', ${valor}, ${quantidade}, ${total}, '${data}');`; 

    con.query(query, (err, result) => {

        if (err) {
            res.redirect("http://127.0.0.1:5500/front/index.html?erro=ID já está cadastrado&err=" + err.code);
        } else {
            res.redirect("http://127.0.0.1:5500/front/index.html");
        }

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

// Configurações de saída - FrontEnd

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas de Saída - FrontEnd

app.get("/", teste);
app.post("/produtos", create);
app.get("/produtos", read);

// Teste e porta no console

app.listen(3000, () => {

    console.log("Back-end respondendo na porta 3000");

});