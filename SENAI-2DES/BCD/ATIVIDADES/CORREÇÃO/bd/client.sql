CREATE DATABASE IF NOT EXISTS borracharia CHARSET=UTF8 COLLATE utf8_general_ci;
USE borracharia;

CREATE TABLE cliente (
    id varchar(5) NOT NULL PRIMARY KEY,
    nome varchar(50) NOT NULL,
    endereco varchar(50) NOT NULL,
    telefone varchar(20),
    produto varchar(50) NOT NULL,
    quantidade varchar(50) NOT NULL,
    valor decimal(10,2) NOT NULL
);

INSERT INTO cliente VALUES
('i001', 'a', '43232', 'a1', 'jhg', '2', 122.65),
('i002', 'b', '53255', 'd3', 'gfc', '5', 122.65),
('i003', 'c', '54276', '4e', 'dsa', '3', 122.65),
('i004', 'd', '13531', 'fe3', 'jh b', '2', 122.65),
('i005', 'e', '87999', 'd32', 'vfd', '5', 122.65),
('i006', 'f', '64787', '4s2', 'sgt', '7', 122.65);

SELECT * FROM cliente;