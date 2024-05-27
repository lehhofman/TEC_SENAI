const formPessoa = document.querySelector('#formPessoa')
const pessoas = []

formPessoa.addEventListener('submit', (e) => {

    e.preventDefault()

        pessoas.push(new Pagamento(formPessoa.nome.value, formPessoa.salario.value))

        formPessoa.nome.value = ''
        formPessoa.salario.value = ''

        criarCard()


})

function criarCard(){

    const cards = document.querySelector('.cards')
    let card = document.querySelector('.card')

    cards.innerHTML = ''
    cards.appendChild(card)

    pessoas.forEach(pessoa => {

        let cardNew = card.cloneNode(true)

        cardNew.classList.remove('model')

        cardNew.querySelector(".nome").innerHTML = `<h2>Funcionário: ${pessoa.nome}</h2>`
        cardNew.querySelector(".salario").innerHTML = `<p> Salário: R$ <span class="editsalario">${pessoa.salario}</span></p>`
        cardNew.querySelector(".inss").innerHTML = `<p>INSS: R$ ${pessoa.inss().toFixed(2)}`
        cardNew.querySelector(".salarioBase").innerHTML = `<p>Salário Base: R$ ${pessoa.salarioBase}`
        cardNew.querySelector(".irrf").innerHTML = `<p>IRRF: R$ ${pessoa.irrf().toFixed(2)}</p>`
        
        cards.appendChild(cardNew)

    })

}

function deletarCard(){

    document.querySelector('.card').remove();

}

function modificarCard() {
    const atualizarsalario = document.querySelector('#modificar');
    const modificarsalario = document.querySelector('#salarioatualizar');

    atualizarsalario.addEventListener('click', () => {
        const nomepessoa = prompt('Digite o nome do funcionário que deseja alterar');
        const novosalario = parseFloat(prompt('Digite o novo salário para ' + nomepessoa + ':'));

        for (let i = 0; i < pessoas.length; i++) {
            if (pessoas[i].nome === nomepessoa && !isNaN(novosalario)) {
                pessoas[i].salario = novosalario;
                pessoas[i].salarioBase = 0.9 * novosalario;
                pessoas[i].salarioLiquido = 0.8 * novosalario;

                // Você deve ter uma função criarCard() para criar o cartão com os dados atualizados
                // Se não houver, você pode adicionar o código apropriado para atualizar o cartão aqui.

                return;
            }
        }

        alert('Funcionário não encontrado ou o novo salário não é um número válido.');
    });
}
