window.onload = function() {
    fetch('http://localhost:3000/api/fornecedor')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('dados'); // Verifique se o ID 'dados-cliente' está correto
            tbody.innerHTML = ''; // Limpa o conteúdo anterior da tabela

            data.forEach(fornecedor => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${fornecedor.id}</td>
                    <td>${fornecedor.nome}</td>
                    <td>${fornecedor.telefone}</td>
                    <td>${fornecedor.endereco}</td>
                    
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(error => console.error('Erro ao buscar dados de fornecedor:', error));
};

function cadastrarProduto() {
    // Obter os valores dos campos de entrada do formulário
    var id = document.getElementById('id').value;
    var nome = document.getElementById('nome').value;
    var descricao = document.getElementById('descricao').value;
    var valor = document.getElementById('valor').value;

    // Criar um objeto representando o novo produto
    var produto = {
        id: id,
        nome: nome,
        descricao: descricao,
        valor: valor
    };

    // Adicionar o novo produto à tabela
    adicionarProdutoATabela(produto);

    // Limpar os campos do formulário após o cadastro
    limparCamposDoFormulario();
}

// Função para adicionar o novo produto à tabela
function adicionarProdutoATabela(produto) {
    // Obter a referência à tabela e à sua body
    var tbody = document.getElementById('dados');

    // Criar uma nova linha (tr) na tabela
    var newRow = tbody.insertRow();

    // Inserir as células (td) na nova linha com os valores do produto
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = produto.id;
    cell2.innerHTML = produto.nome;
    cell3.innerHTML = produto.descricao;
    cell4.innerHTML = produto.valor;
}

// Função para limpar os campos do formulário após o cadastro
function limparCamposDoFormulario() {
    document.getElementById('id').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
}