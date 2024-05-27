
//CRUD - Create
criar.addEventListener('submit', e => {

    e.preventDefault();

    const data = {

        cpf: criar.cpf.value,
        nome: criar.nome.value,
        sobrenome: criar.sobrenome.value,
        produto: criar.produto.value,
        valor: criar.valor.value,
        quantidade: criar.quantidade.value,
        total: criar.total.value,
        data: criar.data.value

    };

    fetch(uri, {

        method: 'POST',
        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify(data)

    })

        .then(res => res.json())
        .then(res => {

            if (res.sqlMessage == undefined) {

                produtos.push(res);
                dados.innerHTML = "";

                preencherTabela();
                cadastro.classList.add('oculto');
                criar.reset();

            } else {

                cadastro.classList.add('oculto');
                mensagens(res.sqlMessage, 'Erro ao cadastrar cliente!');

            }

        });

});

function update(btn) {

    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    let id = celulas[0].innerHTML;
    let data = {

        cpf: celulas[1].innerHTML,
        nome: celulas[2].innerHTML.split(" ")[0],
        sobrenome: celulas[2].innerHTML.split(" ")[1],
        nascimento: celulas[3].innerHTML

    };

    fetch(uri + '/' + id, {

        method: 'PUT',
        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify(data)

    })

        .then(res => res.json())
        .then(res => {

            if (res.sqlMessage == undefined) {

                celulas[1].removeAttribute('contenteditable');
                celulas[2].removeAttribute('contenteditable');
                celulas[3].removeAttribute('contenteditable');

                btn.innerHTML = '*';
                btn.setAttribute('onclick', 'edit(this)');

            } else {

                mensagens(res.sqlMessage, 'Erro ao atualizar cliente!');

            }

        });
        
}

//CRUD - Delete
function del(id) {
    mensagens('Deseja realmente excluir o cliente id = ' + id + '?', 'Excluir cliente', id);
}

//Confirma exclusão
function confirmar(id) {
    fetch(uri + '/' + id, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(res => {
            window.location.reload();
        });
}

//Tornar as células da linha tabela editáveis
function edit(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    for (let i = 1; i < celulas.length - 1; i++) {
        celulas[i].setAttribute('contenteditable', 'true');
    }
    btn.innerHTML = '✔';
    btn.setAttribute('onclick', 'update(this)');
}

//Mostrar mensagens do sistema em um modal
function mensagens(msg, titulo, confirma) {
    msgs.classList.remove('oculto');
    document.querySelector('#errTit').innerHTML = titulo;
    document.querySelector('#msg').innerHTML = msg;
    if (confirma != undefined) {
        document.querySelector('#confirma').classList.remove('oculto');
        document.querySelector('#confirma').setAttribute("onclick", `confirmar(${confirma})`);
    }
}

//Calcular idade a partir da data de nascimento
function calcIdade(nascimento) {
    let data = new Date(nascimento);
    let hoje = new Date();
    let idade = hoje.getFullYear() - data.getFullYear();
    let mes = hoje.getMonth() - data.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < data.getDate())) {
        idade--;
    }
    return idade;
}