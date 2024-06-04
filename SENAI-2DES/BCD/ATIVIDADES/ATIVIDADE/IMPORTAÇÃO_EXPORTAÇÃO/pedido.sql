DROP DATABASE IF EXISTS pedidos;
CREATE DATABASE pedidos CHARSET=UTF8 COLLATE utf8_general_ci;
USE pedidos;

CREATE TABLE Cliente (
    id integer not null primary key auto_increment,
    cpf VARCHAR(14) NOT NULL unique,
    nome VARCHAR(100) NOT NULL,
    cep VARCHAR(50) not null,
    numero VARCHAR(10),
    complemento VARCHAR(100)
);

CREATE TABLE Telefone (
    id_cliente integer not null,
    telefone VARCHAR(15) NOT NULL UNIQUE,
    foreign key (id_cliente) references Cliente(id)
);

CREATE TABLE Produto (
    id integer not null primary key auto_increment,
    nome VARCHAR(100) NOT NULL,
    preco float(10,2) not null
);

CREATE TABLE Entregador (
    id integer not null primary key auto_increment,
    nome VARCHAR(100) NOT NULL,
    veiculo VARCHAR(30) not null
);

CREATE TABLE Pedido (
    id integer not null primary key auto_increment,
    id_cliente integer not null,
    id_entregador integer not null,
    data Date NOT NULL,
    hora_pedido time not null,
    hora_entrega time,
    hora_fim time,
    quantidade integer not null,
    id_produto integer not null,
    preco_unitario  float(10,2) not null,
    foreign key (id_cliente) references Cliente(id),
    foreign key (id_entregador) references Entregador(id)
);