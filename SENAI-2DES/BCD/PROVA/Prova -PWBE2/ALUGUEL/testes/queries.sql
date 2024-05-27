SELECT * FROM Cliente ORDER BY Nome;

SELECT c.Nome, t.Telefone FROM Cliente c LEFT JOIN Telefone t ON c.CPF = t.CPF_cliente;

SELECT * FROM Veiculo ORDER BY Marca, Modelo;

SELECT * FROM Veiculo WHERE Marca = 'Fiat' ORDER BY Diaria DESC;

SELECT v.*, COUNT(r.Placa) AS Quantidade_Alugueis FROM Veiculo v LEFT JOIN Reserva r ON v.Placa = r.Placa GROUP BY v.Placa;

CREATE VIEW vw_todos_os_alugueis AS SELECT r.Placa, c.Nome AS Nome_Cliente, v.Modelo, v.Marca, r.Dias, r.Subtotal FROM Reserva r JOIN Veiculo v ON r.Placa = v.Placa JOIN Cliente c ON r.CPF_cliente = c.CPF;
SELECT * FROM `vw_todos_os_alugueis`

