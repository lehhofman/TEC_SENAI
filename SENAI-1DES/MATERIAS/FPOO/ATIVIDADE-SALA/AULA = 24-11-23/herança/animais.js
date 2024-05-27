class animal{

    constructor(nome){
        this.nome = nome;
    }

    emitirsom(){
        console.log(`${this.nome} faz um som`);
    }
}

class cachorro extends animal{

    constructor(nome, faro){
        super(nome);
        this.faro;
    }

    emitirsom(){
        console.log(`${this.nome} faz au au`);
    }

    abanarrabo(){
        console.log(`${this.nome} abana o rabo`);
    }
}

class gato extends animal{

    constructor(nome){
        super(nome);
    }

    emitirsom(){
        console.log(`${this.nome} faz miau`);
    }
}

const cachorro1 = new cachorro('rex', 90);
const cachorro2 = new cachorro('ney', 30);
const gato1 = new gato('mimi');

cachorro1.emitirsom();
cachorro2.abanarrabo();
gato1.emitirsom();
