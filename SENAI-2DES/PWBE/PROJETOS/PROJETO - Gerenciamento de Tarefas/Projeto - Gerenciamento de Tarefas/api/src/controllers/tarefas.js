const con = require('../connection/mysql');

// CRUD - CREATE

const addTarefa = (req, res) => {
    
    const { descricao, data_de_vencimento, status, id_do_usuario } = req.body;
    if (descricao && data_de_vencimento && status && id_do_usuario) {
        con.query('INSERT INTO Tarefas (Descricao, Data_de_Vencimento, Status, ID_do_Usuario) VALUES (?, ?, ?, ?)',
            [descricao, data_de_vencimento, status, id_do_usuario],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar tarefa:', err);
                    res.status(500).json({ error: 'Erro ao adicionar tarefa' });
                } else {
                    const newTask = { ID: result.insertId, descricao, data_de_vencimento, status, id_do_usuario };
                    res.status(201).json(newTask);
                }
            });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }

};

// CRUD - READ

const getTarefas = (req, res) => {

    con.query('SELECT * FROM Tarefas', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao listar tarefas' });
        } else {
            res.json(result);
        }
    });

}

// CRUD - UPDATE

const updateTarefa = (req, res) => {

    const { ID, descricao, data_de_vencimento, status, ID_do_Usuario } = req.body;
    if (ID && descricao && data_de_vencimento && status && ID_do_Usuario) {
        con.query('UPDATE Tarefas SET Descricao = ?, Data_de_Vencimento = ?, Status = ?, ID_do_Usuario = ? WHERE ID = ?', [descricao, data_de_vencimento, status, ID_do_Usuario, ID], (err, result) => {
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

const deleteTarefa = (req, res) => {
    
    const { id } = req.params;
    if (id) {
        con.query('DELETE FROM Tarefas WHERE ID = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Tarefa não encontrada' });
                } else {
                    res.status(200).json({ message: 'Tarefa removida com sucesso' });
                }
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }
    
}

module.exports = {
    addTarefa,
    getTarefas,
    updateTarefa,
    deleteTarefa
}