DROP DATABASE IF EXISTS borracharia;
CREATE DATABASE borracharia CHARSET=UTF8 COLLATE utf8_general_ci;
USE borracharia;

CREATE TABLE produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT,
    valor DECIMAL(10,2) NOT NULL
);

INSERT INTO produto (nome, descricao, valor) VALUES
('Pneu', 'a15', 100.00),
('Pneu', 'a13', 2200.00),
('Pneu', 'a14', 500.00),
('Aro', 'a15', 450.00),
('Aro', 'a14', 2500.00),
('Aro', 'a13', 1600.00);

select * from produto;