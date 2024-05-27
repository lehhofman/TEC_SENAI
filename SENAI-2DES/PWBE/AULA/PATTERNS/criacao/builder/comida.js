class Ingrediente {
    constructor(descricao) {
        this.descricao = descricao;
    }
}

class Comida {
    constructor(nome, tipo, peso) {
        this.nome = nome != undefined ? nome : 'Comida Generica';
        this.tipo = tipo != undefined ? tipo : 'Tipo Generica';
        this.peso = peso != undefined ? peso : 0;
        this.ingredientes = [];
    }
}

class Salgada extends Comida {
    constructor(nome, peso) {
        super(nome, 'Salgada', peso);
    }
}

class Doce extends Comida {
    constructor(nome, peso) {
        super(nome, 'Doce', peso);
    }
}

class ComidaBuilder {
    constructor(nome, tipo, peso) {
        if (nome != undefined && tipo != undefined && peso != undefined) {
            if (tipo == 'Salgada') {
                this.comida = new Salgada(nome, peso);
            } else if (tipo == 'Doce') {
                this.comida = new Doce(nome, peso);
            } else {
                this.comida = new Comida(nome, tipo, peso);
            }
        } else if (nome != undefined && tipo != undefined) {
            if (tipo == 'Salgada') {
                this.comida = new Salgada(nome);
            } else if (tipo == 'Doce') {
                this.comida = new Doce(nome);
            } else {
                this.comida = new Comida(nome, tipo);
            }
        } else if (nome != undefined) {
            this.comida = new Comida(nome);
        } else {
            this.comida = new Comida();
        }
    }

    addIngrediente(ingrediente) {
        this.comida.ingredientes.push(ingrediente);
        return this;
    }

    build() {
        return this.comida;
    }
}

const comidas = [
    new ComidaBuilder("Arroz", "Salgada", 100),
    new ComidaBuilder("Feijao"),
    new ComidaBuilder("Brigadeiro", "Doce"),
    new ComidaBuilder("Bolo", "Doce", 200),
    new ComidaBuilder("Macarrão", "Salgada", 150),
    new ComidaBuilder("Sopa"),
    new ComidaBuilder("Peixe", "Salgada", 300),
    new ComidaBuilder("Torta de Morango", "Doce", 250),
    new ComidaBuilder("Salada")
];

comidas[0].addIngrediente(new Ingrediente("Sal"));
comidas[0].addIngrediente(new Ingrediente("Alho"));
comidas[2].addIngrediente(new Ingrediente("Leite condensado"));
comidas[2].addIngrediente(new Ingrediente("Chocolate em pó"));

console.log(comidas);
console.table(comidas);
console.log(JSON.stringify(comidas, null, 2));
