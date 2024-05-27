const moedasEl = document.getElementById('moedas');
const quantidadeEl = document.getElementById('quantidade');
const moedas1El = document.getElementById('moedas1');
const quantidade1El = document.getElementById('quantidade1');
const taxaEl = document.getElementById('taxa');
const trocar = document.getElementById('trocar');

moedasEl.addEventListener('change', calcular);
quantidadeEl.addEventListener('input', calcular);
moedas1El.addEventListener('change', calcular);
quantidade1El.addEventListener('input', calcular);

trocar.addEventListener('click', () => {

	const temp = moedasEl.value;

	moedasEl.value = moedas1El.value;
	moedas1El.value = temp;

	calcular();

});

function calcular() {

	const moedas = moedasEl.value;
	const moedas1 = moedas1El.value;

	const taxa = 5.04;

	taxaEl.innerText = `1 ${moedas} = ${taxa} ${moedas1}`;
	quantidade1El.value = (quantidadeEl.value * taxa).toFixed(2);

}

calcular();