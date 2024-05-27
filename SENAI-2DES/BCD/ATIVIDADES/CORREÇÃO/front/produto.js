window.onload = function() {
    fetch('http://localhost:3000/api/produto')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('dados');
            tbody.innerHTML = '';

            data.forEach(produto => {
                const tr = document.createElement('tr');

                // Formata o valor para o padrão R$ 0,00
                const formattedValor = parseFloat(produto.valor).toFixed(2).replace('.', ',');
                const valor = `R$ ${formattedValor}`;

                tr.innerHTML = `
                    <td>${produto.id}</td>
                    <td>${produto.nome}</td>
                    <td>${produto.descricao}</td>
                    <td>${valor}</td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(error => console.error('Erro ao buscar dados de produtos:', error));
};

function cadastrarProduto() {
    var id = document.getElementById('id').value;
    var nome = document.getElementById('nome').value;
    var descricao = document.getElementById('descricao').value;
    var valor = document.getElementById('valor').value;

    // Formata o valor para o padrão R$ 0,00
    valor = parseFloat(valor).toFixed(2).replace('.', ',');
    valor = 'R$ ' + valor;

    var tbody = document.getElementById('dados');
    var newRow = tbody.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = id;
    cell2.innerHTML = nome;
    cell3.innerHTML = descricao;
    cell4.innerHTML = valor;

    // Limpar campos do formulário após o cadastro
    document.getElementById('id').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
}