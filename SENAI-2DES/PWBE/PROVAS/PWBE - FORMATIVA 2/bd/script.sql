drop database if exists aluguel;
create database aluguel CHARSET=UTF8 COLLATE utf8_general_ci;
use aluguel;

-- Tabela Veículo
CREATE TABLE Veiculo (
    Placa VARCHAR(10) PRIMARY KEY,
    Modelo VARCHAR(50),
    Marca VARCHAR(50),
    Tipo VARCHAR(50),
    Diaria DECIMAL(10,2)
);

-- Tabela Cliente
CREATE TABLE Cliente (
    CPF VARCHAR(14) PRIMARY KEY,
    Nome VARCHAR(100)
);

-- Tabela Telefone
CREATE TABLE Telefone (
    CPF_cliente VARCHAR(14), 
    Telefone VARCHAR(20),
    PRIMARY KEY (CPF_cliente, Telefone),
    FOREIGN KEY (CPF_cliente) REFERENCES Cliente(CPF)
);

-- Tabela Reserva
CREATE TABLE Reserva (
    Placa VARCHAR(10),
    CPF_cliente VARCHAR(14),
    Data_reserva DATE,
    Data_retirada DATE,
    Data_devolucao DATE,
    Dias INT,
    Status VARCHAR(20),
    Subtotal DECIMAL(10,2),
    PRIMARY KEY (Placa, CPF_cliente, Data_reserva),
    FOREIGN KEY (Placa) REFERENCES Veiculo(Placa),
    FOREIGN KEY (CPF_cliente) REFERENCES Cliente(CPF)
);

describe Veiculo;
describe Cliente;
describe Telefone;
describe Reserva;