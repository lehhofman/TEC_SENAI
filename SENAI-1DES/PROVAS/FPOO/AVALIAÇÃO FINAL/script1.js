class Marca{
    constructo(nome){
        this.nome = nome;
    }
    FalaMarca(){
        return `Eu sou o carro da marca ${this.nome}`;
    }
}
class Modelo extends Marca{
    constructor(marca, modelo){
        super(marca);
        this.modelo = modelo;
    }
    FalarModelo(){
        return `${this.nome} e eu sou o modelo ${this.modelo}`;
    }
}
carro1 = new Modelo("Honda", "Civic");
carro2 = new Modelo("Citroen", "Jumper");
carro3 = new Modelo("Ford", "Ford-Ka");
carro4 = new Modelo("Fiat", "Argo");
carro5 = new Modelo("Hyundai", "HB20");

console.table(carro1);
console.table(carro2);
console.table(carro3);
console.table(carro4);
console.table(carro5);