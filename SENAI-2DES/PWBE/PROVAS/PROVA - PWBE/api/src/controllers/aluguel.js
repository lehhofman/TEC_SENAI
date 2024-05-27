const con = require('../connection/mysql');

// CRUD - CREATE
const addAluguel = (req, res) => {
    const { placa, cpf, reserva, retirada, devolucao, subtotal } = req.body;
    if (placa && cpf && reserva && retirada && devolucao && subtotal) {
        con.query('INSERT INTO Aluguel (placa, cpf, reserva, retirada, devolucao, subtotal) VALUES (?, ?, ?, ?, ?, ?)',
            [placa, cpf, reserva, retirada, devolucao, subtotal],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar aluguel:', err);
                    res.status(500).json({ error: 'Erro ao adicionar aluguel' });
                } else {
                    const newAluguel = { placa, cpf, reserva, retirada, devolucao, subtotal };
                    res.status(201).json(newAluguel);
                }
            });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }
};

// CRUD - READ
const getAluguel = (req, res) => {
    con.query('SELECT * FROM Aluguel', (err, results) => {
        if (err) {
            console.error('Erro ao buscar aluguéis:', err);
            res.status(500).json({ error: 'Erro ao buscar aluguéis' });
        } else {
            res.status(200).json(results);
        }
    });
};

const mostrarReservados = (req, res) => {
    con.query('SELECT * FROM Aluguel WHERE devolucao IS NULL', (err, alugueis) => {
        if (err) {
            console.error('Erro ao buscar aluguéis reservados:', err);
            res.status(500).json({ error: 'Erro ao buscar aluguéis reservados' });
        } else {
            res.status(200).json(alugueis);
        }
    });
};

const mostrarAlugados = (req, res) => {
    con.query('SELECT * FROM Aluguel WHERE devolucao IS NOT NULL', (err, alugueis) => {
        if (err) {
            console.error('Erro ao buscar aluguéis alugados:', err);
            res.status(500).json({ error: 'Erro ao buscar aluguéis alugados' });
        } else {
            res.status(200).json(alugueis);
        }
    });
};

// CRUD - UPDATE
const updateAluguel = (req, res) => {
    const { id } = req.params;
    const { placa, cpf, reserva, retirada, devolucao, subtotal } = req.body;
    if (id && placa && cpf && reserva && retirada && devolucao && subtotal) {
        con.query('UPDATE Aluguel SET placa = ?, cpf = ?, reserva = ?, retirada = ?, devolucao = ?, subtotal = ? WHERE id = ?', 
        [placa, cpf, reserva, retirada, devolucao, subtotal, id], 
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(200).json(req.body);
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios para atualização' });
    }
};

// CRUD - DELETE
const deleteAluguel = (req, res) => {
    const { id } = req.params;
    if (id) {
        con.query('DELETE FROM Aluguel WHERE id = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                res.status(200).json({ message: 'Aluguel removido com sucesso' });
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar o ID do aluguel a ser removido' });
    }
};

module.exports = {
    addAluguel,
    getAluguel,
    mostrarReservados,
    mostrarAlugados,
    updateAluguel,
    deleteAluguel
};
