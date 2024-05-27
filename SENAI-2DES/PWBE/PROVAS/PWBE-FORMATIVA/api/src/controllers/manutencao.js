const con = require('../connection/mysql');

// CRUD - CREATE

const addManutencao = (req, res) => {
    
    const { placa, matricula, inicio, fim, descricao } = req.body;
    if (placa && matricula && inicio && descricao) {
        con.query('INSERT INTO manutencao (placa, matricula, inicio, fim, descricao) VALUES (?, ?, ?, ?, ?)',
            [placa, matricula, inicio, fim, descricao],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar manutenção:', err);
                    res.status(500).json({ error: 'Erro ao adicionar manutenção' });
                } else {
                    const newMaintenance = { id: result.insertId, placa, matricula, inicio, fim, descricao };
                    res.status(201).json(newMaintenance);
                }
            });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }

};

// CRUD - READ

const getManutencoes = (req, res) => {
    con.query('SELECT * FROM manutencao WHERE fim IS NULL OR fim = ""', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao listar manutenções' });
        } else {
            res.json(result);
        }
    });
}


// CRUD - UPDATE

const updateManutencao = (req, res) => {

    const { id, placa, matricula, inicio, fim, descricao } = req.body;
    if (id && placa && matricula && inicio && descricao) {
        con.query('UPDATE manutencao SET placa = ?, matricula = ?, inicio = ?, fim = ?, descricao = ? WHERE id = ?', 
        [placa, matricula, inicio, fim, descricao, id], 
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

const deleteManutencao = (req, res) => {
    
    const { id } = req.params;
    if (id) {
        con.query('DELETE FROM manutencao WHERE id = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Manutenção não encontrada' });
                } else {
                    res.status(200).json({ message: 'Manutenção removida com sucesso' });
                }
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }
    
}

module.exports = {
    addManutencao,
    getManutencoes,
    updateManutencao,
    deleteManutencao
}