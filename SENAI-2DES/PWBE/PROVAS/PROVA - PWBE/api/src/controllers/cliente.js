const con = require('../connection/mysql');

// CRUD - CREATE

const addCliente = (req, res) => {
    const { cpf, nome_cliente } = req.body;
    if (cpf && nome_cliente) {
        con.query('INSERT INTO Cliente (cpf, nome_cliente) VALUES (?, ?)',
            [cpf, nome_cliente],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar cliente:', err);
                    res.status(500).json({ error: 'Erro ao adicionar cliente' });
                } else {
                    const newClient = { cpf, nome_cliente };
                    res.status(201).json(newClient);
                }
            });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }
};

// CRUD - READ

const getCliente = (req, res) => {
    con.query('SELECT * FROM Cliente', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar clientes' });
        } else {
            if (result.length === 0) {
                res.status(404).json({ error: 'Nenhum cliente encontrado' });
            } else {
                res.json(result);
            }
        }
    });
}

const updateCliente = (req, res) => {
    const { cpf } = req.params;
    const { nome_cliente } = req.body;
    if (cpf && nome_cliente) {
        con.query('UPDATE Cliente SET cpf = ? ? WHERE nome_cliente', 
        [cpf,nome_cliente], 
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(200).json({ cpf, nome_cliente });
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }
}

const deleteCliente = (req, res) => {
    const { cpf } = req.params;
    if (cpf) {
        con.query('DELETE FROM Cliente WHERE cpf = ?', [cpf], (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Cliente não encontrado' });
                } else {
                    res.status(200).json({ message: 'Cliente removido com sucesso' });
                }
            }
        });
    } else {
        res.status(400).json({ error: 'Favor fornecer o CPF do cliente' });
    }
}

module.exports = {
    addCliente,
    getCliente,
    updateCliente,
    deleteCliente
}
