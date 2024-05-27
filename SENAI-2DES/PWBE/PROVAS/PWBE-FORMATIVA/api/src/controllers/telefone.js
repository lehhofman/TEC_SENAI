const con = require('../connection/mysql');

// CRUD - CREATE

const addTelefone = (req, res) => {
    
    const { matricula, numero } = req.body;
    if (matricula && numero) {
        con.query('INSERT INTO telefone (matricula, numero) VALUES (?, ?)',
            [matricula, numero],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar telefone:', err);
                    res.status(500).json({ error: 'Erro ao adicionar telefone' });
                } else {
                    const newPhone = { matricula, numero };
                    res.status(201).json(newPhone);
                }
            });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }

};

// CRUD - READ

const getTelefones = (req, res) => {

    con.query('SELECT * FROM telefone', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao listar telefones' });
        } else {
            res.json(result);
        }
    });

}

// CRUD - UPDATE

const updateTelefone = (req, res) => {

    const { matricula, numero } = req.body;
    if (matricula && numero) {
        con.query('UPDATE telefone SET numero = ? WHERE matricula = ?', 
        [numero, matricula], 
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(200).json(req.body);
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }

}

// CRUD - DELETE

const deleteTelefone = (req, res) => {
    
    const { matricula } = req.params;
    if (matricula) {
        con.query('DELETE FROM telefone WHERE matricula = ?', [matricula], (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Telefone não encontrado' });
                } else {
                    res.status(200).json({ message: 'Telefone removido com sucesso' });
                }
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }
    
}

module.exports = {
    addTelefone,
    getTelefones,
    updateTelefone,
    deleteTelefone
}
