//                                      Objeto vazio, declarado diretamente

const obj = {};

//----------------------------------------------------------------------------------------------------------

//                                     Acrescentando atributos dinamicamente

obj.produto = 'Bola';
obj.preço = 39.90;
obj.quantidade = 10;

//----------------------------------------------------------------------------------------------------------

//                                  Acrescentando métodos com function, dinânicamente

obj.total = function (){

    return obj.preço * obj.quantidade;

}

//----------------------------------------------------------------------------------------------------------

//                                Acrescentando outro método com arrow function, dinamicamente

obj.showHTML = () => {

    let str = `<label>Produto:</label><label>${obj.produto}</label>`;

    str += `<label>Preço:</label><label>${obj.preço}</label>`;
    str += `<label>Quantidade:</label><label>${obj.quantidade}</label>`;
    str += `<label>Total: </label><label> ${obj.total().toFixed(2)}</label>`;

    return str;

}

//----------------------------------------------------------------------------------------------------------

//                                     Objeto cheio, com atributos e métodos

const obj2 = {

//----------------------------------------------------------------------------------------------------------

//                                      Atributos locais do objeto

    produto:"Pipa",
    preco: 11.20,
    quantidade: 5,

//----------------------------------------------------------------------------------------------------------

//                                     Métodos locais do objeto

    total(){

        return this.preco * this.quantidade;

    },

    showHTML(){

        let str = `<label>Produto:</label><label>${this.produto}</label>`;

        str += `<label>Preço:</label><label>${this.preco}</label>`;
        str += `<label>Quantidade:</label><label>${this.quantidade}</label>`;
        str += `<label>Total: </label><label>${this.total().toFixed(2)}</label>`;

        return str;

    }

}

//----------------------------------------------------------------------------------------------------------

//                                  Terceiro objeto, com atributos e métodos

const obj3 = {

//----------------------------------------------------------------------------------------------------------

//                                      Atributos locais do objeto

    produto:"Carrinho",
    preco: 27.80,
    quantidade: 7,

//----------------------------------------------------------------------------------------------------------

    //                                      Métodos locais do objeto

    total(){

        return this.preco * this.quantidade;

    },

    showHTML(){

        let str = `<label>Produto:</label><label>${this.produto}</label>`;

        str += `<label>Preço:</label><label>${this.preco}</label>`;
        str += `<label>Quantidade:</label><label>${this.quantidade}</label>`;
        str += `<label>Total: </label><label>${this.total().toFixed(2)}</label>`;

        return str;

    }

}

//----------------------------------------------------------------------------------------------------------

//                                                  Saídas no console

console.log(obj);
console.log('Valor total = R$ '+obj.total().toFixed(2));

console.log(obj2);
console.log('Valor total = R$ '+obj2.total().toFixed(2));

console.log(obj3);
console.log('Valor total = R$ '+obj3.total().toFixed(2));

//----------------------------------------------------------------------------------------------------------

//                                                    Saída no HTML

const main = document.getElementById('objetos');

const div = document.createElement('div');
div.innerHTML = obj.showHTML();
main.appendChild(div);

const div2 = document.createElement('div');
div2.innerHTML = obj2.showHTML();
main.appendChild(div2);

const div3 = document.createElement('div');
div3.innerHTML = obj3.showHTML();
main.appendChild(div3);