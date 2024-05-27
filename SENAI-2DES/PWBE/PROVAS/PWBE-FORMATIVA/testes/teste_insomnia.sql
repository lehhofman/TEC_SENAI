Teste manutencoes:

get -> http://localhost:3000/manutencoes/:id

post -> http://localhost:3000/manutencoes

put -> http://localhost:3000/manutencoes/:id

delete -> http://localhost:3000/manutencoes/:id

{
    "placa": "DEA-7981",
    "matricula": 48482,
    "inicio": "2023-06-05",
    "fim": null,
    "descricao": "Retrovisor quebrado"
}

Teste telefone:

get -> http://localhost:3000/telefones/:matricula

post -> http://localhost:3000/telefones

put -> http://localhost:3000/telefones/:matricula

delete -> http://localhost:3000/telefones/:matricula

{
	"matricula": 48482,
	"numero": "11854796"
}

Teste veiculo:

get -> http://localhost:3000/veiculos/:placa

post -> http://localhost:3000/veiculos

put -> http://localhost:3000/veiculos/:placa

delete -> http://localhost:3000/veiculos/:placa

{
	"placa": "Teste",
	"modelo": "Palio",
	"marca": "Fiat",
	"ano": 2002
}

Teste funcionario:

get -> http://localhost:3000/funcionarios/:matricula

post -> http://localhost:3000/funcionarios

put -> hhttp://localhost:3000/funcionarios/:matricula

delete -> http://localhost:3000/funcionarios/:matricula

{
	"matricula": 1111,
	"nome": "Teste testando"
}