const con = require('../connection/mysql');

// CRUD - CREATE

const addReserva = (req, res) => {
    const { reserva, retirada, devolucao, dias, subtotal, placa, cpf_cliente, status } = req.body;
    if (reserva && retirada && devolucao && dias && placa && cpf_cliente && status) {
        con.query('INSERT INTO Reserva (data_reserva, data_retirada, data_devolucao, dias, subtotal, placa, cpf_cliente, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [reserva, retirada, devolucao, dias, subtotal, placa, cpf_cliente, status],
            (err, result) => {
                if (err) {
                    console.error('Erro ao adicionar reserva:', err);
                    res.status(500).json({ error: 'Erro ao adicionar reserva' });
                } else {
                    const newReservation = { reserva, retirada, devolucao, dias, subtotal, placa_veiculo: placa, cpf_cliente, status };
                    res.status(201).json(newReservation);
                }
            });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }
};


// CRUD - READ

const getReserva = (req, res) => {
    con.query('SELECT * FROM Reserva', (err, results) => {
        if (err) {
            console.error('Erro ao buscar reservas:', err);
            res.status(500).json({ error: 'Erro ao buscar reservas' });
        } else {
            res.status(200).json(results);
        }
    });
}

const mostrarReservados = (req, res) => {
    con.query('SELECT * FROM Reserva WHERE status = "reservado"', (err, reservas) => {
        if (err) {
            console.error('Erro ao buscar reservas reservadas:', err);
            res.status(500).json({ error: 'Erro ao buscar reservas reservadas' });
        } else {
            res.status(200).json(reservas);
        }
    });
};

const mostrarAlugados = (req, res) => {
    con.query('SELECT * FROM Reserva WHERE status = "alugado"', (err, reservas) => {
        if (err) {
            console.error('Erro ao buscar reservas alugadas:', err);
            res.status(500).json({ error: 'Erro ao buscar reservas alugadas' });
        } else {
            res.status(200).json(reservas);
        }
    });
};

// CRUD - UPDATE

const updateReserva = (req, res) => {
    const { id } = req.params;
    const { reserva, retirada, devolucao, dias, subtotal, placa_veiculo, cpf_cliente, status } = req.body;
    if (id && reserva && retirada && devolucao && dias && subtotal && placa_veiculo && cpf_cliente && status) {
        con.query('UPDATE Reserva SET data_reserva = ?, data_retirada = ?, data_devolucao = ?, dias = ?, subtotal = ?, placa = ?, cpf_cliente = ?, status = ? WHERE reserva_id = ?', 
        [reserva, retirada, devolucao, dias, subtotal, placa_veiculo, cpf_cliente, status, id], 
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

const deleteReserva = (req, res) => {    
    const { id } = req.params;
    if (id) {
        con.query('DELETE FROM Reserva WHERE reserva_id = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json({ error: err });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Reserva não encontrada' });
                } else {
                    res.status(200).json({ message: 'Reserva removida com sucesso' });
                }
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios' });
    }
}

module.exports = {
    addReserva,
    getReserva,
    updateReserva,
    deleteReserva,
    mostrarReservados,
    mostrarAlugados
}
