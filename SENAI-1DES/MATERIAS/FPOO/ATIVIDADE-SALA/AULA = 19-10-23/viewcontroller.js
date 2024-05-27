const formPessoa = document.querySelector('#formPessoa');
const pessoas = [];

formPessoa.addEventListener('submit', (e) => {

    e.preventDefault();

    pessoas.push(new Pagamento(formPessoa.nome.value, formPessoa.salario.value));

    criarCard();

})

function criarCard(){

    const cards = document.querySelector('.cards');
    let card = document.querySelector('.card');

    cards.innerHTML = '';
    
    pessoas.forEach(pessoa => {

        let cardNew = card.cloneNode(true);

        cardNew.classList.remove('model');

        cardNew.querySelector("#nomeValor").innerHTML = pessoa.nome;
        cardNew.querySelector("#salarioValor").innerHTML = pessoa.salario;
        cardNew.querySelector("#salarioBase").innerHTML = pessoa.salarioBase;
        cardNew.querySelector("#salarioLiquido").innerHTML = pessoa.salarioLiquido;

        cards.appendChild(cardNew);
    })
}

   function deletarCard(){

    document.querySelector('.card').remove();

   }

   function modificarCard(){

    const atualizar = document.querySelector('#modificar');
    const modificacao = document.querySelector('#salarioAtualizado');

    atualizar.addEventListener('click',() => {

        const funcionario = prompt('Digite o nome do funcionário que deseja modificar');
        const novo = parseFloat(prompt('Digite o novo sálario ') + funcionario + ':');

        for (let i = 0; i < pessoas.length; i++) {

            if(pessoas[i].nome === funcionario && !isNaN(novo)){

                pessoas[i].salario = novo;
                pessoas[i].salarioBase = 0.9 * novo;
                pessoas[i].salarioLiquido = 0.8 * novo;

                criarCard();
                return;

            }
        }

        alert('Não encontrado');

    });

   }
