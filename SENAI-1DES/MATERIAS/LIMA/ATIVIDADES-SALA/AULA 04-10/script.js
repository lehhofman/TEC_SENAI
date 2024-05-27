//  var nome = document.getElementById('nome')
//  var resultado = document.getElementById('resultado')

//  function buscarElemento(){
//       let nome = document.getElementById('nome')

//      resultado.innerHTML = nome.value 
//  }

function calculo(){
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    document.querySelector('#result').innerHTML = `RESPOSTA: A soma da expressão "(a + b) / c" é igual a: ${(a+b)/c}`
}

function calculo1(){
    let v = Number(document.getElementById('v').value);
    let d = Number(document.getElementById('d').value);

    document.querySelector('#result1').innerHTML = `RESPOSTA: Levara ${(d/v)} horas para percorrer essa distância`
}

function calculo2(){
    let s = Number(document.getElementById('s').value);
    let r = Number(document.getElementById('r').value);

    document.querySelector('#result22').innerHTML =`RESPOSTA: O valor do reajuste será de R$ ${(s * r / 100)},00`
    document.querySelector('#result2').innerHTML =`RESPOSTA: O salario do funcionário vai ser de R$ ${(s +(s * r / 100))},00`
}

function calculo3(){
    let f = Number(document.getElementById('f').value);
    let e = Number(document.getElementById('e').value);

    document.querySelector('#result3').innerHTML = `RESPOSTA: O total de pontos desse time é: ${(f * 3 + (e))}`
}

function calculo4(){
    let l = Number(document.getElementById('l').value);
    let m = Number(document.getElementById('m').value);

    document.querySelector('#result4').innerHTML = `RESPOSTA: n + 1: ${(l + m)}`
    document.querySelector('#result5').innerHTML = `RESPOSTA: n - 1: ${(m - l)}`
}

function calculo6(){
    let n = Number(document.getElementById('n').value);
    let o = Number(document.getElementById('o').value);

    document.querySelector('#result6').innerHTML = `RESPOSTA: Levara ${(n / o)} horas para percorrer essa distância`
}

function calculo7(){
    let p = Number(document.getElementById('p').value);
    let q = Number(document.getElementById('q').value);
    let r = q * 250;

    document.querySelector('#result7').innerHTML = `RESPOSTA: Serão necessarias ${(r + q - 1)/p} viagens `
}

function calculo8(){
    let x = Number(document.getElementById('x').value);
    let w = Number(document.getElementById('w').value);
    let pi = 3
    let lat = 2 * pi * (x * w)
    let base = 2 * pi * (x * x);


    document.querySelector('#result8').innerHTML = `RESPOSTA: A área do cilindro é de: ${(lat + base)}  `
    document.querySelector('#result9').innerHTML = `RESPOSTA: O volume do cilindro é de: ${(pi * x * (x * w))}  `
}

function calculo10(){
    let z = Number(document.getElementById('z').value);
    let g = Number(document.getElementById('g').value);

    document.querySelector('#result100').innerHTML = `RESPOSTA: O novo valor de reajuste será de: R$ ${(z * g / 100)},00`
    document.querySelector('#result10').innerHTML = `RESPOSTA: O novo preço da mercadoria sera: R$ ${(z + z * g / 100)},00`
}

function calculo11(){
    let ab = Number(document.getElementById('ab').value);
    let ac = Number(document.getElementById('ac').value);

    document.querySelector('#result11').innerHTML = `RESPOSTA: A porcentagem de participação da cidade foi: ${(ac * 100 / ab)}%`
}