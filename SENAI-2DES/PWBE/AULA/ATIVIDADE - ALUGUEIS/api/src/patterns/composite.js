// Exemplo com composite = Um cliente é composto por dois telefones.

// [
// 	{
// 		"cpf": "111.111.111-11",
// 		"nome_cliente": "Osvaldo Oliveira",
// 		"telefone": ["19-06078-6843", "19-72077-0521"]
// 	}
// ]

const compositeClientes = (lista) => {
    const listaComposta = [];
    let cpf = 0;
    lista.forEach((c) => {
        if(cpf !== c.cpf){
            c.telefones = [];
            c.telefones.push(c.telefone);
            delete c.telefone;
            cpf = c.cpf;
            listaComposta.push(c);
        }else{
            listaComposta[listaComposta.length - 1].telefones.push(c.telefone); 
        }
    })
    return listaComposta;
}

module.exports = {
    compositeClientes
}