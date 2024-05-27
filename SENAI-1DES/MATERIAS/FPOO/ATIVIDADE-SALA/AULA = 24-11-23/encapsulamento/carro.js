class carro{

    constructor(marca, modelo, cor){
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    get cor(){
        return this._cor;
    }

    set cor(novacor){
        this._cor = novacor;
    }

    exibirinformacoes(){
        console.log(`carro: ${this._marca}, modelo:  ${this._modelo}, cor: ${this._cor}`)
    }
}

const meucarro = new carro('ford', 'ka', 'vermelho');
meucarro.exibirinformacoes();

meucarro.cor = 'azul';
meucarro.exibirinformacoes();