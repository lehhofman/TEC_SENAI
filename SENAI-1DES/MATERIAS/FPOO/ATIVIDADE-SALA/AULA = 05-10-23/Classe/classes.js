//                                      Criar objetos a partir de uma classe

class Coisa{

    constructor(produto, preco, quantidade){

        this.produto = produto;
        this.preco = preco;
        this.quantidade = quantidade;

    }

    total(){

        return this.preco * this.quantidade

    }

    showHTML(){

        let str = `<label>Produto:</label><label>${this.produto}</label>`;

        str += `<label>Preço:</label><label>${this.preco}</label>`;
        str += `<label>Quantidade:</label><label>${this.quantidade}</label>`;
        str += `<label>Total:</label><label>${this.total().toFixed(2)}</label>`;

        return str;

    }

}

//                                          Criar instâncias desta classe

const obj1 = new Coisa('Cadeira', 149.90, 6);
const obj2 = new Coisa('Mesa', 349.90, 1);
const obj3 = new Coisa('Caneta', 2.99, 50);
const obj4 = new Coisa('Sofá', 1200.00, 1);
const obj5 = new Coisa('Poltrona do papai', 5500.00, 1);

//                                              Saídas no HTML

const main = document.getElementById('objetos');

const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');

div1.innerHTML = obj1.showHTML();
div2.innerHTML = obj2.showHTML();
div3.innerHTML = obj3.showHTML();
div4.innerHTML = obj4.showHTML();
div5.innerHTML = obj5.showHTML();

main.appendChild(div1);
main.appendChild(div2);
main.appendChild(div3);
main.appendChild(div4);
main.appendChild(div5);