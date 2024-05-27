class decoracao {
    constructor(tipo) {
        this.tipo = tipo;
    }
}
class livro {
    constructor(titulo) {
        this.titulo = titulo;
    }
}
class estante {
    constructor() {
        this.decoracoes = [];
        this.livros = [];
    }
    addLivro(livro) {
        this.livros.push(livro)
    }
    addDecoracao(decoracao) {
        this.decoracoes.push(decoracao);
    }
}
let livro1 = new livro('Por lugares incriveis');
let decoracao1 = new decoracao('Luminária');
let livro2 = new livro('A cula é das estrelas');
let decoracao2 = new decoracao('Mesa');
let minhaEstante = new estante();
let minhaEstante2 = new estante();
console.table(minhaEstante);
minhaEstante.addLivro(livro1);
minhaEstante.addDecoracao(decoracao1);
minhaEstante.addLivro(livro2);
minhaEstante.addDecoracao(decoracao2);
console.table(minhaEstante);
console.table(minhaEstante);



