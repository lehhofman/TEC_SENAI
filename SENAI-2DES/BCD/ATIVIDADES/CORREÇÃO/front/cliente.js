window.onload = function() {
    fetch('http://localhost:3000/api/cliente')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('dados'); // Verifique se o ID 'dados-cliente' está correto
            tbody.innerHTML = ''; // Limpa o conteúdo anterior da tabela

            data.forEach(cliente => {
                const tr = document.createElement('tr');

                // Formata o valor para o padrão R$ 0,00
                const formattedValor = parseFloat(cliente.valor).toFixed(2).replace('.', ',');
                const valor = `R$ ${formattedValor}`;

                tr.innerHTML = `
                    <td>${cliente.id}</td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.endereco}</td>
                    <td>${cliente.telefone}</td>
                    <td>${cliente.quantidade}</td>
                    <td>${valor}</td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(error => console.error('Erro ao buscar dados de clientes:', error));
};

function cadastrarProduto() {
    // Obter os valores dos campos de entrada do formulário
    var id = document.getElementById('id').value;
    var nome = document.getElementById('nome').value;
    var endereco = document.getElementById('descricao').value;
    var produto = document.getElementById('Produto').value;
    var quantidade = document.getElementById('Quantidade').value;
    var valor = document.getElementById('valor').value;

    // Formatar o valor para o padrão R$ 0,00
    valor = parseFloat(valor).toFixed(2).replace('.', ',');
    valor = 'R$ ' + valor;

    // Criar um objeto representando o novo cliente
    var cliente = {
        id: id,
        nome: nome,
        endereco: endereco,
        produto: produto,
        quantidade: quantidade,
        valor: valor
    };

    // Adicionar o novo cliente à tabela
    adicionarClienteATabela(cliente);

    // Limpar os campos do formulário após o cadastro
    limparCamposDoFormulario();
}

// Função para adicionar o novo cliente à tabela
function adicionarClienteATabela(cliente) {
    // Obter a referência à tabela e à sua body
    var tbody = document.getElementById('dados');

    // Criar uma nova linha (tr) na tabela
    var newRow = tbody.insertRow();

    // Inserir as células (td) na nova linha com os valores do cliente
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.innerHTML = cliente.id;
    cell2.innerHTML = cliente.nome;
    cell3.innerHTML = cliente.endereco;
    cell4.innerHTML = cliente.produto;
    cell5.innerHTML = cliente.quantidade;
    cell6.innerHTML = cliente.valor;
}

// Função para limpar os campos do formulário após o cadastro
function limparCamposDoFormulario() {
    document.getElementById('id').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('Produto').value = '';
    document.getElementById('Quantidade').value = '';
    document.getElementById('valor').value = '';
}