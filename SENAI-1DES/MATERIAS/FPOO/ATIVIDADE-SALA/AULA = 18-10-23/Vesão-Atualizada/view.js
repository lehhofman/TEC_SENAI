const formPessoa = document.querySelector('#formPessoa')
const pessoas = []

formPessoa.addEventListener('submit', (e) => {

    e.preventDefault()

    if(formPessoa.salarios.value > 0){

        pessoas.push(new Pagamento(formPessoa.nome.value, formPessoa.salarios.value))

        formPessoa.nome.value = ''
        formPessoa.salarios.value = ''

        criarCard()

    }

})

function criarCard(){

    const cards = document.querySelector('.cards')
    let card = document.querySelector('.card')

    cards.innerHTML = ''
    cards.appendChild(card)

    pessoas.forEach(pessoa => {

        let cardNew = card.cloneNode(true)
        cardNew.classList.remove('model')

        cardNew.querySelector(".nome").innerHTML = pessoa.nome
        cardNew.querySelector(".salario").innerHTML = `<p>Salário: R$ <span class="editsalarios">${pessoa.salario}</span></p>`
        cardNew.querySelector(".inss").innerHTML = `<p>INSS: R$ ${pessoa.inss().toFixed(2)}`
        cardNew.querySelector(".salarioBase").innerHTML = `<p>Sal. Base: R$ ${pessoa.salarioBase}</p>`
        cardNew.querySelector(".irrf").innerHTML = `<p>IRRF: R$ ${pessoa.irrf().toFixed(2)}</p>`
        cardNew.querySelector(".salarioLiquido").innerHTML = `<p>Sal. Liquido: R$ ${pessoa.salarioLiquido}</p>`
        cardNew.querySelector(".card1").innerHTML = (pessoas.indexOf(pessoa) + 1).toString();

        cards.appendChild(cardNew)

    })

}

function remove(e){

    e.parentNode.remove()
    pessoas.splice(e.parentNode.querySelector('.card1').innerHTML.slice(1), 1)

    criarCard()

}

function edit(e){

    let nomes = e.parentNode.querySelector('.name')
    let salario = e.parentNode.querySelector('.salario')

    let funcionario = document.createElement('input')
    let salario1 = document.createElement('input')

    let botoes = document.createElement('button')

    botoes.innerText = 'Salvar Alterações'
    botoes.classList.add('botoes')
    botoes.setAttribute('onclick', 'editbotao(this)')


    funcionario.classList.add('editInput')
    funcionario.value = nomes.querySelector('.nome').innerHTML

    nomes.innerHTML= ''
    nomes.appendChild(funcionario)

    salario1.classList.add('editsalario2', 'editInput')
    salario1.value = salario.querySelector('.editsalarios').innerHTML

    salario.innerHTML= ''
    salario.appendChild(salario1)

    e.parentNode.appendChild(botoes)

}

function editbotao(e) {

    let funcionario1 = e.parentNode.querySelector('.editInput');
    let salario2 = e.parentNode.querySelector('.editsalario2');
    
    const index = parseInt(e.parentNode.querySelector('.card1').innerHTML) - 1;

    if (index >= 0 && index < pessoas.length) {

        pessoas[index].nome = funcionario1.value;
        pessoas[index].salario = salario2.value;
        pessoas[index].salarioBase = (pessoas[index].salario - pessoas[index].inss()).toFixed(2);
        pessoas[index].salarioLiquido = (pessoas[index].salarioBase - pessoas[index].irrf()).toFixed(2);

    }

    e.parentNode.querySelector('.botoes').remove();
    criarCard();
}