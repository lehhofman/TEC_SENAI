//1 - Crialção, Buider, a partir do diagrama de classes a seguir modele em JavaScript uma lista com cerca de 10 comidas distintas, conforme o exemplo de carros visto em aula.

class Ingrediente {
    constructor(descrição) {
        this.descrição = descrição;
    }
}

class Comida {
    constructor(nome, tipo, peso) {
        this.nome = nome != undefined ? nome: "Comida Genérica";
        this.tipo = tipo != undefined ? tipo: "Tipo Genérica";
        this.peso = peso != undefined ? peso: 0;
    }
}

class Salgada{
    constructor(nome, peso) {
        this.nome = nome != undefined ? nome: "Comida Genérica";
        this.tipo = "Salgada";
        this.peso = peso != undefined ? peso: 0;
    }
}

class Doce{
    constructor(nome, peso) {
        this.nome = nome != undefined ? nome: "Comida Genérica";
        this.tipo = "Doce";
        this.peso = peso != undefined ? peso: 0;
    }
}

class comidaBuilder{
    constructor(nome, tipo, peso) {
        if(nome != undefined && tipo != undefined && peso != undefined){
            if(tipo == "Salgada"){
                this.comida = new Salgada(nome, peso);
            }else if(tipo == "Doce"){
                this.comida = new Doce(nome, peso);
            }else{
                this.comida = new Comida(nome, tipo, peso);
            }
        }else if (nome != undefined && tipo != undefined ) {
            if(tipo == "Salgada"){
                this.comida = new Salgada(nome, peso);
            }else if(tipo == "Doce"){
                this.comida = new Doce(nome, peso);
            }else{
                this.comida = new Comida(nome, tipo);
            }
        }else if (nome != undefined ) {
            if(tipo == "Salgada"){
                this.comida = new Salgada(nome, peso);
            }else if(tipo == "Doce"){
                this.comida = new Doce(nome, peso);
            }else{
                this.comida = new Comida(nome);
            }
        }else{
            this.comida = new Comida();
        }
    }
    addIngrediente(ingredientes){
        if(this.comida.ingredientes == undefined){
            this.comida.ingredientes = [];
        }
        this.comida.ingredientes.push(ingredientes);
        return this;
    }
    build(){
        return this.comida;
    }
}

const comida = [
    new comidaBuilder(),
    new comidaBuilder("Arroz", "Salgada", 100),
    new comidaBuilder("Lazanha", "Salgada", 500),
    new comidaBuilder("Pizza", "Salgada", 50),
    new comidaBuilder("Farofa", "Salgada", 150),
    new comidaBuilder("Macarrão", "Salgada", 590),
    new comidaBuilder("Brigadeiro", "Doce", 5),
    new comidaBuilder("Sorvete", "Doce"),
    new comidaBuilder("Pudim", "Doce", 100),
    new comidaBuilder("Bolo", "Doce", 350),
    new comidaBuilder("Manjar", "Doce", 432),
]

comida[1].addIngrediente(new Ingrediente("Sal"));
comida[2].addIngrediente(new Ingrediente("Alho"));
comida[3].addIngrediente(new Ingrediente("Leite Condensado"));
comida[4].addIngrediente(new Ingrediente("Doce de Leite "));

console.log(comida);
console.table(comida);
