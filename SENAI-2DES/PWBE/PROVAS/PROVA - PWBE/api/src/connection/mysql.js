const mysql = require('mysql');

const con = mysql.createConnection({

    host: "localhost",
    user: "root",
    database: "alugueis"

});

con.connect((err) => {

    if (err) {

      console.error('Erro ao conectar ao banco de dados:', err);
      return;

    }

    console.log('Conexão bem-sucedida ao banco de dados');
    
  });

module.exports = con;