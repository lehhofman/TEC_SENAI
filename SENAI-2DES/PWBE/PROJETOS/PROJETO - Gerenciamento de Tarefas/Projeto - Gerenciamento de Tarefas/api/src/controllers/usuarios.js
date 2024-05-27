const con = require('../connection/mysql');


const addUsuario = (req, res) => {

    const { nome, email, senha } = req.body;
    if (nome && email && senha) {
        con.query('INSERT INTO Usuarios (Nome, Email, Senha) VALUES (?, ?, ?)', [nome, email, senha], (err, result) => {
            if (err) {
                console.error('Erro ao adicionar usuário:', err);
                res.status(500).json({ error: 'Erro ao adicionar usuário' });
            } else {
                const newUser = { ID: result.insertId, nome, email, senha };
                res.status(201).json(newUser);
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }

};
const login = (req, res) => {
    const { email, senha } = req.body;

    if (email && senha) {
        con.query('SELECT ID FROM Usuarios WHERE Email = ? AND Senha = ?', [email, senha], (err, result) => {
            if (err) {
                console.error('Erro ao buscar usuário:', err);
                res.status(500).json({ error: 'Erro ao buscar usuário' });
            } else {
                if (result.length === 0) {
                    res.status(404).json({ error: 'Usuário não encontrado' });
                } else {
                    const userId = result[0].ID; // Obtém o ID do usuário
                    res.status(200).json({ userId }); // Retorna o ID do usuário
                }
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }
};



const getUsuarios = (req, res) => {

    con.query('SELECT * FROM Usuarios', (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao listar Usuarios' });
        } else {
            res.json(result);
        }
    });

}

const updateUsuario = (req, res) => {

    const { id } = req.params;
    const { nome, email, senha } = req.body;
    if (id && nome && email && senha) {
        con.query('UPDATE Usuarios SET Nome = ?, Email = ?, Senha = ? WHERE ID = ?', [nome, email, senha, id], (err, result) => {
            if (err) {
                console.error('Erro ao atualizar usuário:', err);
                res.status(500).json({ error: 'Erro ao atualizar usuário' });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Usuário não encontrado' });
                } else {
                    const updatedUser = { ID: parseInt(id), nome, email, senha };
                    res.status(200).json(updatedUser);
                }
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }

};

const deleteUsuario = (req, res) => {

    const { id } = req.params;
    if (id) {
        con.query('DELETE FROM Usuarios WHERE ID = ?', [id], (err, result) => {
            if (err) {
                console.error('Erro ao excluir usuário:', err);
                res.status(500).json({ error: 'Erro ao excluir usuário' });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Usuário não encontrado' });
                } else {
                    res.status(200).json({ message: 'Usuário removido com sucesso' });
                }
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }

};

module.exports = {
    
    addUsuario,
    login,
    getUsuarios,
    updateUsuario,
    deleteUsuario

};
