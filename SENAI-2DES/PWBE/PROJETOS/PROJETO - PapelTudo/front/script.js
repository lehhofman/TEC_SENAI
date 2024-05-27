document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('item-form');
    const messageDiv = document.getElementById('message');
    const itemsList = document.getElementById('items-list');
    const totalValueSpan = document.getElementById('total-value');
    let editingItemId = null; 

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const value = parseFloat(document.getElementById('value').value);

        const item = { id, nome: name, descricao: description, valor: value };

        if (editingItemId) {
          
            updateItem(item);
            editingItemId = null; 

        } else {

            addItemToList(item);

        }

        calculateTotal();
        form.reset();
        messageDiv.textContent = 'Item cadastrado com sucesso.';

    });

    const addItemToList = (item) => {

        const row = document.createElement('tr');
        row.innerHTML = `

            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.descricao}</td>
            <td>R$ ${item.valor.toFixed(2)}</td>
            <td>
                <button class="btn-edit">[ - ]</button>
                <button class="btn-delete">[ * ]</button>
            </td>

        `;

        itemsList.appendChild(row);

        row.querySelector('.btn-edit').addEventListener('click', () => {
           
            document.getElementById('id').value = item.id;
            document.getElementById('name').value = item.nome;
            document.getElementById('description').value = item.descricao;
            document.getElementById('value').value = item.valor;

            editingItemId = item.id; 

        });

        row.querySelector('.btn-delete').addEventListener('click', () => {

            row.remove();
            calculateTotal();

        });

    };

    const updateItem = (item) => {
        // Percorre todas as linhas da tabela
        itemsList.querySelectorAll('tr').forEach(row => {
            // Obtém o ID do item na linha atual
            const itemId = row.cells[0].textContent;
            if (itemId === item.id) { // Verifica se o ID corresponde ao ID do item sendo editado
                // Atualiza os campos da linha com os novos valores do item
                row.cells[1].textContent = item.nome;
                row.cells[2].textContent = item.descricao;
                row.cells[3].textContent = `R$ ${item.valor.toFixed(2)}`;
            }
        });
    };

    const calculateTotal = () => {

        let total = 0;

        itemsList.querySelectorAll('tr').forEach(row => {

            const value = parseFloat(row.cells[3].textContent.replace('R$ ', ''));

            total += value;

        });

        totalValueSpan.textContent = total.toFixed(2);

    };

    const loadItems = () => {

        fetch('http://localhost:3000/api/item')

            .then(response => response.json())
            .then(items => {

                items.forEach(item => addItemToList(item));
                calculateTotal();

            })

            .catch(error => console.error('Erro ao carregar itens:', error));

    };

    loadItems();
    
});