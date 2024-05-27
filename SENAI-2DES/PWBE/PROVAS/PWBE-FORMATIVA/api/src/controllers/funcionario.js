const con = require('../connection/mysql');

// CRUD - CREATE

const addFuncionario = (req, res) => {
    
    const { matricula, nome } = req.body;
    if (matricula && nome) {
        con.query('INSERT INTO funcionario (matricula, nome) VALUES (?, ?)',
            [matricula, nome],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar funcionário:', err);
                    res.status(500).json({ error: 'Erro ao adicionar funcionário' });
                } else {
                    const newEmployee = { matricula, nome };
                    res.status(201).json(newEmployee);
                }
            });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }

};

// CRUD - READ

const getFuncionarios = (req, res) => {

    con.query('SELECT * FROM funcionario', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao listar funcionários' });
        } else {
            res.json(result);
        }
    });

}

// CRUD - UPDATE

const updateFuncionario = (req, res) => {

    const { matricula, nome } = req.body;
    if (matricula && nome) {
        con.query('UPDATE funcionario SET nome = ? WHERE matricula = ?', 
        [nome, matricula], 
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

const deleteFuncionario = (req, res) => {
    
    const { matricula } = req.params;
    if (matricula) {
        con.query('DELETE FROM funcionario WHERE matricula = ?', [matricula], (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Funcionário não encontrado' });
                } else {
                    res.status(200).json({ message: 'Funcionário removido com sucesso' });
                }
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }
    
}

module.exports = {
    addFuncionario,
    getFuncionarios,
    updateFuncionario,
    deleteFuncionario
}
