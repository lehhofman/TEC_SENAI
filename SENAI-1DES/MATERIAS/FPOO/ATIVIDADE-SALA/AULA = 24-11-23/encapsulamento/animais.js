class animal{

    constructor(nome, especie){
        this._nome = nome;
        this._especie = especie;
    }

    get nome(){
        return this._nome;
    }

    get especie(){
        return this._especie;
    }

    falar(){
        console.log(`${this._nome} é um ${this._especie}.`);
    }
}

const cachorro = new animal('rex', "cachorro");
cachorro.falar();