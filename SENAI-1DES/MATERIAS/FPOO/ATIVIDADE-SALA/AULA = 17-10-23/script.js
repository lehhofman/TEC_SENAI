class pagamento {

    constructor(nome, salario) {

        this.nome = nome
        this.salario = salario
        this.inss = (this.inss()).toFixed(2);
        this.irrf = (this.irrf().toFixed(2));
        this.salBase = (this.salario - this.inss).toFixed(2);
        this.salLiquido = (this.salBase - this.irrf).toFixed(2);;

    }



    inss() {

        if (this.salario < 1320.01)
            return this.salario * 7.5 / 100;
        else if (this.salario < 2571.30)
            return this.salario * 9 / 100;
        else if (this.salario < 3856.95)
            return this.salario * 12 / 100;
        else if (this.salario < 7507.49)
            return this.salario * 14 / 100;
        else
            return 1051.05;

    }

    irrf() {

        if (this.salario < 1903.99)
            return 0;
        else if (this.salario < 2826.66)
            return this.salario * 7.5 / 100 - 142.8;
        else if (this.salario < 3751.06)
            return this.salario * 15 / 100 - 354.8;
        else if (this.salario < 4664.69)
            return this.salario * 22.5 / 100 - 636.13;
        else
            return this.salario * 27.5 / 100 - 869.36;

    }

    showHTML() {
        let str = `<div class="funcionario"><h2>Funcionário:</h2><h2>${this.nome}</h2></div><div class="salarios"><label>Salário:</label><label>R$ ${this.salario}</label>`;
        str += `<label>INSS:</label><label>R$ ${this.inss}</label><label>Sal.Base:</label><label>R$ ${this.salBase}</label>`
        str += `<label>IRRF:</label><label>R$ ${this.irrf}</label><label>Sal.Liquido:</label><label>R$ ${this.salLiquido}</label></div>`;
        return str;
    }

}

const lista = [];
lista.push(new pagamento('Leticia', 1850));
lista.push(new pagamento('Sonia', 2896));
lista.push(new pagamento('Maria', 3547));
lista.push(new pagamento('Miguel', 4816));
lista.push(new pagamento('Yasmim', 7512));
lista.push(new pagamento('Kauã', 8951));

console.table(lista)

const main = document.getElementById('pagamentos');
lista.forEach(funcionario => {
    const card = document.createElement('div')
    card.innerHTML = funcionario.showHTML()
    main.appendChild(card)
    console.log(pagamento)
})