drop database if exists transportadora;
create database transportadora;
use transportadora;

-- DDL
create table Clientes(
    id_cliente int not null auto_increment,
    nome varchar(100) not null,
    endereco varchar(100) not null,
    telefone varchar(20) not null,
    email varchar(30),
    primary key (id_cliente)
);

INSERT INTO Clientes (nome, endereco, telefone, email) VALUES
('Maria', 'Av. do carmo, 32', '1111-1111', 'maria@gmail.com'),
('João', 'Centro RJ, 12', '2222-2222', 'joao@gmail.com'),
('Lucia', 'R. Parama, 12', '3333-3333', 'lucia@gmail.com');

SELECT * FROM Clientes;

create table Veiculo(
    id_veiculo int not null primary key auto_increment,
    placa varchar(20) not null,
    modelo varchar(20) not null,
    capacidade int
);

INSERT INTO Veiculo (placa, modelo, capacidade) VALUES
('hsn039', 'HB20', 2),
('jdn732', 'Ford Ka', 4),
('jsn45', 'Gol', 1);

SELECT * FROM Veiculo;

create table Funcionarios(
    id_funcionario int not null primary key auto_increment,
    nome varchar(20) not null,
    cargo varchar(20) not null,
    salario decimal(10,2)
);

INSERT INTO Funcionarios (nome, cargo, salario) VALUES
('Joaquin', 'analista', 40000.00),
('Marilza', 'gerente', 80000.00),
('Lucindo', 'desenvolvedor', 5000.00);

SELECT * FROM Funcionarios;

create table Rotas(
    id_rota int auto_increment,
    origem varchar(50) not null,
    destino varchar(50) not null,
    distancia_km decimal(10, 2),
    primary key (id_rota)
);

INSERT INTO Rotas (origem, destino, distancia_km) VALUES
('rua luno', 'rua matas', 230.80),
('rua milhas', 'rua ilha', 422.12),
('rua ports', 'rua desmas', 4321.30),
('rua ruas', 'rua wds', 321.30),
('rua oit', 'rua murd', 2121.30);

SELECT * FROM Rotas;

create table Entregas(
    id_entrega int primary key auto_increment,
    inicio varchar(50),
    fim varchar(50),
    status varchar(20),
    id_veiculo int,
    motorista varchar(50),
    id_rota int,
    FOREIGN KEY (id_rota) REFERENCES Rotas(id_rota),
    FOREIGN KEY (id_veiculo) REFERENCES Veiculo(id_veiculo)
);
create table Entregas(
    id_entrega int primary key auto_increment,
    inicio varchar(50),
    fim varchar(50),
    status varchar(20),
    id_veiculo int,
    motorista varchar(50),
    id_rota int,
    FOREIGN KEY (id_rota) REFERENCES Rotas(id_rota),
    FOREIGN KEY (id_veiculo) REFERENCES Veiculo(id_veiculo)
);

INSERT INTO Entregas (inicio, fim, status, id_veiculo, motorista, id_rota) VALUES
('rua 1', 'rua 2', 'entregue', 1, 'mot1', 1),
('rua 2', 'rua 3', 'pendente', 2, 'mot2', 2),
('rua 4', 'rua 5', 'em rota', 3, 'mot3', 3),
('rua 5', 'rua 2', 'pendente', 3, 'mot1', 4),
('rua 6', 'rua 1', 'em rota', 3, 'mot3', 5),
('rua 7', 'rua 6', 'entregue', 3, 'mot6', 2),
('rua 8', 'rua 7', 'em rota', 3, 'mot9', 3),
('rua 9', 'rua 9', 'em rota', 3, 'mot2', 1),
('rua 10', 'rua 8', 'pendente', 3, 'mot3', 4),
('rua 11', 'rua 10', 'em rota', 3, 'mot4', 5);


SELECT * FROM Entregas;

create table Pedidos(
    id_pedido int primary key auto_increment,
    valor int not null,
    data date not null,
    id_cliente int,
    id_veiculo int,
    id_funcionario int,
    id_entrega int,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    FOREIGN KEY (id_veiculo) REFERENCES Veiculo(id_veiculo),
    FOREIGN KEY (id_funcionario) REFERENCES Funcionarios(id_funcionario),
    FOREIGN KEY (id_entrega) REFERENCES Entregas(id_entrega)
);

INSERT INTO Pedidos (valor, data, id_cliente, id_veiculo, id_funcionario, id_entrega) VALUES
(100, '2024-02-28', 1, 1, 1, 1),
(150, '2024-02-28', 2, 2, 2, 1),
(200, '2024-02-28', 3, 3, 3, 2),
(250, '2024-02-28', 1, 1, 1, 2),
(300, '2024-02-28', 2, 2, 2, 3),
(350, '2024-02-28', 3, 3, 3, 3),
(400, '2024-02-28', 1, 1, 1, 4),
(450, '2024-02-28', 2, 2, 2, 4),
(500, '2024-02-28', 3, 3, 3, 5),
(550, '2024-02-28', 1, 1, 1, 5),
(600, '2024-02-28', 2, 2, 2, 6),
(650, '2024-02-28', 3, 3, 3, 6),
(700, '2024-02-28', 1, 1, 1, 7),
(750, '2024-02-28', 2, 2, 2, 7),
(800, '2024-02-28', 3, 3, 3, 8),
(850, '2024-02-28', 1, 1, 1, 8),
(900, '2024-02-28', 2, 2, 2, 9),
(950, '2024-02-28', 3, 3, 3, 9),
(1000, '2024-02-28', 1, 1, 1, 10),
(1050, '2024-02-28', 2, 2, 2, 10);

SELECT * FROM Pedidos;