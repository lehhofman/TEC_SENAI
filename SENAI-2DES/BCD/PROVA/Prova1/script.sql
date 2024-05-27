CREATE DATABASE oficinas;
USE oficinas;

CREATE TABLE Veiculo (
    Placa VARCHAR(20) PRIMARY KEY,
    Modelo VARCHAR(50),
    Marca VARCHAR(50),
    Ano INT
);

CREATE TABLE Manutencao (
    Id_Manutencao INT PRIMARY KEY,
    Inicio_Manutencao DATE,
    Fim_Manutencao DATE,
    Descricao VARCHAR(255),
    Placa VARCHAR(20),
    FOREIGN KEY (Placa) REFERENCES Veiculo(Placa)
);

CREATE TABLE Funcionario (
    Matricula INT PRIMARY KEY,
    Nome VARCHAR(100)
);

CREATE TABLE Telefone (
    Matricula INT,
    Numero VARCHAR(20),
    PRIMARY KEY (Matricula, Numero),
    FOREIGN KEY (Matricula) REFERENCES Funcionario(Matricula)
);