CREATE DATABASE IF NOT EXISTS borracharia CHARSET=UTF8 COLLATE utf8_general_ci;
USE borracharia;

CREATE TABLE fornecedor (
    id VARCHAR(5) NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    telefone TEXT,
    endereco VARCHAR(50) NOT NULL
);
INSERT INTO fornecedor VALUES
('i001', 'a', '43232', 'a1'),
('i002', 'b', '53255', 'd3'),
('i003', 'c', '54276', '4e'),
('i004', 'd', '13531', 'fe3'),
('i005', 'e', '87999', 'd32'),
('i006', 'f', '64787', '4s2');

SELECT * FROM fornecedor;