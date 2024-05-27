class Ovelha {

    constructor(name, weight) {

      this.name = name;
      this.weight = weight;

    }
  
    clone() {}

  }
  
  class BlackOvelha extends Ovelha {

    constructor(name, weight) {

      super(name, weight);
      this.color = 'black';

    }
  
    clone() {

      return new BlackOvelha(this.name, this.weight);

    }

  }
  
  const blackOvelha = new BlackOvelha('Dolly', 50);
  const clonedOvelha = blackOvelha.clone();
  
  console.log(clonedOvelha.name); 
  console.log(clonedOvelha.weight); 
  console.log(clonedOvelha.color);