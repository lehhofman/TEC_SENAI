1 SELECT * FROM Funcionario ORDER BY Nome;
2 SELECT f.Nome AS Nome_Funcionario, t.Numero AS Telefone FROM Funcionario f JOIN Telefone t ON f.Matricula = t.Matricula;
3 SELECT * FROM Veiculo WHERE Marca = 'Fiat' ORDER BY Ano DESC;
4 SELECT v.Placa, v.Modelo, v.Marca, v.Ano, COUNT(m.Id_Manutencao) AS Quantidade_Manutencoes FROM Veiculo v JOIN Manutencao m ON v.Placa = v.Placa GROUP BY v.Placa, v.Modelo, v.Marca, v.Ano;
5 CREATE VIEW vw_todas_as_manutencoes AS SELECT m.*, f.Nome AS Nome_Funcionario, v.Modelo FROM Manutencao m INNER JOIN Funcionario f ON f.Matricula = f.Matricula INNER JOIN Veiculo v ON v.Placa = v.Placa;
