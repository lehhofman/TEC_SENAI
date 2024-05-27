drop database if exists gerenciamento;
create database gerenciamento CHARSET=UTF8 COLLATE utf8_general_ci;
use gerenciamento;

-- Criar tabela de Usuários

CREATE TABLE Usuarios (

    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100),
    Email VARCHAR(100),
    Senha VARCHAR(64) 

);

-- Criar tabela de Tarefas

CREATE TABLE Tarefas (

    ID INT PRIMARY KEY AUTO_INCREMENT,
    Descricao TEXT,
    Data_de_Vencimento DATE,
    Status VARCHAR(20),
    ID_do_Usuario INT,
    FOREIGN KEY (ID_do_Usuario) REFERENCES Usuarios(ID)
    
);


describe Usuarios;

describe Tarefas;