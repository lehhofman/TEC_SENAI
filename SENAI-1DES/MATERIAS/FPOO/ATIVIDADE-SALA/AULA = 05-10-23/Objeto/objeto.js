
//                                          Objeto declarado diretamente

const obj = {};

//-----------------------------------------------------------------------------------------------------------

//                                            Atributos dinamicamente

obj.produto = 'Bola';
obj.preço = 39.90;
obj.quantidade = 10;

//-----------------------------------------------------------------------------------------------------------

//                                             Método com function

obj.total = function (){

    return obj.preço * obj.quantidade;

}

//-----------------------------------------------------------------------------------------------------------

//                                            Método com arrow function

obj.showHTML = () => {

    let str = `<label>Produto: </label><label>${obj.produto}</label><br>`;

    str += `<label>Preço: </label><label>${obj.preço}</label><br>`;
    str += `<label>Quantidade: </label><label>${obj.quantidade}</label> unidades<br>`;
    str += `<label>Total: R$ </label><label>${obj.total().toFixed(2)}</label>`;

    return str;

}

//-----------------------------------------------------------------------------------------------------------

//                                                 Saídas no console

console.log(obj);

console.log('Valor total = R$ '+obj.total().toFixed(2));

//-----------------------------------------------------------------------------------------------------------

//                                                 Saída no HTML

const main = document.getElementById('objetos');

const div = document.createElement('div');
div.innerHTML = obj.showHTML();

main.appendChild(div);