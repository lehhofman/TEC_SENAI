const con = require('../connection/mysql');

// CRUD - CREATE

const addTelefone = (req, res) => {
    
    const { cpf_cliente, telefone } = req.body;
    if (cpf_cliente && telefone) {
        con.query('INSERT INTO Telefone (cpf_cliente, telefone) VALUES (?, ?)',
            [cpf_cliente, telefone],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar telefone:', err);
                    res.status(500).json({ error: 'Erro ao adicionar telefone' });
                } else {
                    const newPhone = { cpf_cliente, telefone };
                    res.status(201).json(newPhone);
                }
            });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }

};

// CRUD - READ

const getTelefones = (req, res) => {

    con.query('SELECT * FROM Telefone', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao listar telefones' });
        } else {
            res.json(result);
        }
    });

}

// CRUD - UPDATE

const updateTelefone = (req, res) => {

    const { cpf_cliente, telefone } = req.body;
    if (cpf_cliente && telefone) {
        con.query('UPDATE Telefone SET cpf_cliente = ? WHERE telefone = ?', 
        [cpf_cliente, telefone], 
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
    
    const { cpf_cliente } = req.params;
    if (cpf_cliente) {
        con.query('DELETE FROM Telefone WHERE cpf_cliente = ?', [cpf_cliente], (err, result) => {
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
