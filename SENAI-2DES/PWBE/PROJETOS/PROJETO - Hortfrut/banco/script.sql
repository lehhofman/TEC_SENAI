drop database if exists hortifruti;
create database hortifruti;
use hortifruti;

create table produtos(

    cpf varchar(14) not null unique,
    nome varchar(50) not null,
    produtos varchar(100),
    valor decimal(10, 2) not null,
    quantidade int not null,
    total decimal(10, 2) not null,
    data datetime not null

);

describe produtos;

insert into produtos(cpf, nome, produtos, valor, quantidade, total, data)
values

("111.111.111-11", "Maria", "Melacia", 15.90, "1", 15.90, "2024-01-28 08:45:20"),
("222.222.222-22", "Ana", "Laranja", 00.80, "10", 08.00, "2024-01-30 11:22:50"),
("333.333.333-33", "João", "Banana", 01.10, "3", 3.30, "2024-01-30 16:24:43");


select * from produtos;