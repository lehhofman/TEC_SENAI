const triangulos = {};

triangulos.lado1 = 10;
triangulos.lado2 = 20;
triangulos.lado3 = 30;

triangulos.tipo = function (){

    if(triangulos.lado1 != triangulos.lado2 && triangulos.lado2 != triangulos.lado3){

        return "Escaleno";

    }else if(triangulos.lado1 == triangulos.lado2 && triangulos.lado2 == triangulos.lado3){

        return "Equilatero";

    }else if(triangulos.lado1 == triangulos.lado2 && triangulos.lado2 != triangulos.lado3){

        return "Isóceles";

    }else{

        return "Isóceles";

    }
}

triangulos.showHTML = () => {

    let str = `<label>Lado1: </label><label>${triangulos.lado1}</label>`;

    str += `<label>Lado2: </label><label>${triangulos.lado2}</label>`;
    str += `<label>Lado3: </label><label>${triangulos.lado3}</label>`;
    str += `<label>Tipo: </label><label>${triangulos.tipo()}</label`;

    return str;

}

const triangulos2 = {

    lado1 : 10,
    lado2 : 10,
    lado3 : 30,

tipo () {

    if(triangulos2.lado1 != triangulos2.lado2 && triangulos2.lado2 != triangulos2.lado3){

        return "Escaleno";

    }else if(triangulos2.lado1 == triangulos2.lado2 && triangulos2.lado2 == triangulos2.lado3){

        return "Equilatero";

    }else if(triangulos2.lado1 == triangulos2.lado2 && triangulos2.lado2 != triangulos2.lado3){

        return "Isóceles";

    }else{

        return "Isóceles";
        
    }

    },

    showHTML () {

        let str = `<label>Lado1: </label><label>${triangulos2.lado1}</label>`;
    
        str += `<label>Lado2: </label><label>${triangulos2.lado2}</label>`;
        str += `<label>Lado3: </label><label>${triangulos2.lado3}</label>`;
        str += `<label>Tipo: </label><label>${triangulos2.tipo()}</label`;
    
        return str;
    
    }

}

const triangulos3 = {

    lado1 : 10,
    lado2 : 20,
    lado3 : 10,

tipo () {

    if(triangulos3.lado1 != triangulos3.lado2 && triangulos3.lado2 != triangulos3.lado3){

        return "Escaleno";

    }else if(triangulos3.lado1 == triangulos3.lado2 && triangulos3.lado2 == triangulos3.lado3){

        return "Equilatero";

    }else if(triangulos3.lado1 == triangulos3.lado2 && triangulos3.lado2 != triangulos3.lado3){

        return "Isóceles";

    }else{

        return "Isóceles";
        
    }

    },

    showHTML () {

        let str = `<label>Lado1: </label><label>${triangulos3.lado1}</label>`;
    
        str += `<label>Lado2: </label><label>${triangulos3.lado2}</label>`;
        str += `<label>Lado3: </label><label>${triangulos3.lado3}</label>`;
        str += `<label>Tipo: </label><label>${triangulos3.tipo()}</label`;
    
        return str;
    
    }

}

const triangulos4 = {

    lado1 : 30,
    lado2 : 10,
    lado3 : 10,

tipo () {

    if(triangulos4.lado1 != triangulos4.lado2 && triangulos4.lado2 != triangulos4.lado3){

        return "Escaleno";

    }else if(triangulos4.lado1 == triangulos4.lado2 && triangulos4.lado2 == triangulos4.lado3){

        return "Equilatero";

    }else if(triangulos4.lado1 == triangulos4.lado2 && triangulos4.lado2 != triangulos4.lado3){

        return "Isóceles";

    }else{

        return "Isóceles";
        
    }

    },

    showHTML () {

        let str = `<label>Lado1: </label><label>${triangulos4.lado1}</label>`;
    
        str += `<label>Lado2: </label><label>${triangulos4.lado2}</label>`;
        str += `<label>Lado3: </label><label>${triangulos4.lado3}</label>`;
        str += `<label>Tipo: </label><label>${triangulos4.tipo()}</label`;
    
        return str;
    
    }

}

const triangulos5 = {

    lado1 : 20,
    lado2 : 20,
    lado3 : 20,

tipo () {

    if(triangulos5.lado1 != triangulos5.lado2 && triangulos5.lado2 != triangulos5.lado3){

        return "Escaleno";

    }else if(triangulos5.lado1 == triangulos5.lado2 && triangulos5.lado2 == triangulos5.lado3){

        return "Equilatero";

    }else if(triangulos5.lado1 == triangulos5.lado2 && triangulos5.lado2 != triangulos5.lado3){

        return "Isóceles";

    }else{

        return "Isóceles";
        
    }

    },

    showHTML () {

        let str = `<label>Lado1: </label><label>${triangulos5.lado1}</label>`;
    
        str += `<label>Lado2: </label><label>${triangulos5.lado2}</label>`;
        str += `<label>Lado3: </label><label>${triangulos5.lado3}</label>`;
        str += `<label>Tipo: </label><label>${triangulos5.tipo()}</label`;
    
        return str;
    
    }

}

console.log(triangulos);
console.log(triangulos.tipo());

console.log(triangulos2);
console.log(triangulos2.tipo());

console.log(triangulos3);
console.log(triangulos3.tipo());

console.log(triangulos4);
console.log(triangulos4.tipo());

console.log(triangulos5);
console.log(triangulos5.tipo());

const main = document.getElementById('triangulos');

const div = document.createElement('div');
div.innerHTML = triangulos.showHTML();
main.appendChild(div);

const div2 = document.createElement('div');
div2.innerHTML = triangulos2.showHTML();
main.appendChild(div2);

const div3 = document.createElement('div');
div3.innerHTML = triangulos3.showHTML();
main.appendChild(div3);

const div4 = document.createElement('div');
div4.innerHTML = triangulos4.showHTML();
main.appendChild(div4);

const div5 = document.createElement('div');
div5.innerHTML = triangulos5.showHTML();
main.appendChild(div5);