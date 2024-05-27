// Defini as classes
class Carro {
    constructor(preco) {
      this.preco = preco;
    }
  
    accept(visitor) {
      visitor.visitCarro(this);
    }
  }
  
  class Moto {
    constructor(preco) {
      this.preco = preco;
    }
  
    accept(visitor) {
      visitor.visitMoto(this);
    }
  }
  
  // Defini o visitor
  class Visitor {
    constructor() {
      this.precoTotal = 0;
      this.numCarros = 0;
      this.numMotos = 0;
    }
  
    visitCarro(elemento) {
      console.log("carro");
      this.precoTotal += elemento.preco;
      this.numCarros++;
    }
  
    visitMoto(elemento) {
      console.log("moto");
      this.precoTotal += elemento.preco;
      this.numMotos++;
    }
  
    calcularPrecoTotal() {
      console.log(`Preço total dos veículos: ${this.precoTotal}`);
    }
  
    contarVeiculos() {
      console.log(`Número de carros: ${this.numCarros}`);
      console.log(`Número de motos: ${this.numMotos}`);
    }
  }
  
  // Exemplo
  const veiculos = [new Moto(10000), new Carro(25000), new Moto(12000), new Moto(32000)];
  const visitor = new Visitor();
  
  veiculos.forEach(veiculo => {
    veiculo.accept(visitor);
  });
  
  visitor.contarVeiculos();
  visitor.calcularPrecoTotal();
  