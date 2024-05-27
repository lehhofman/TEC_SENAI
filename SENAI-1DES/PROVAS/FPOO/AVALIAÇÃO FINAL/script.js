class Cliente{
    constructor(nome, cpf, email, telefone){
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
    }
    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome = nome;
    }
    getCpf(){
        return this.cpf;
    }
    setCpf(cpf){
        this.cpf = cpf;
    }
    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
    getTelefone(){
        return this.telefone;
    }
    setTelefone(telefone){
        this.telefone = telefone;
    }
    toString(){
        return "Nome: " + this.nome + "\nCPF:" + this.cpf + "\nE-mail:" + this.email + "\nTelefone:" + this.telefone;
    }
}
const clientes = new Cliente("Maria","123.456.789-12","maria@js.com", "(19) 12345-6789");
clientes.toString();
const clientes1 = new Cliente("João","548.586.789-98","joão@js.com", "(19) 78945-5698");
clientes.toString();
const clientes2 = new Cliente("Pedro","7854.2145.961-89","Pedro@js.com", "(19) 2458-9542");
clientes.toString();
const clientes3 = new Cliente("Antônio","631.279.215-35","Antônio@js.com", "(19) 04595-8634");
clientes.toString();
const clientes4 = new Cliente("Sara","601.133.903-43","Sara@js.com", "(19) 91839-0367");
clientes.toString();
const clientes5 = new Cliente("Ivone","248.815.051-73","Ivone@js.com", "(19) 83861-9444");
clientes.toString();
const clientes6 = new Cliente("Hugo","296.605.168-00","Hugo@js.com", "(19) 39581-3292");
clientes.toString();
const clientes7 = new Cliente("Valéria","393.341.937-94","Valéria@js.com", "(19) 10973-9603");
clientes.toString();
const clientes8 = new Cliente("Wendy","160.876.165-78","Wendy@js.com", "(19) 83217-0254");
clientes.toString();
const clientes9 = new Cliente("Luciana","968.597.122-60","Luciana@js.com", "(19) 73424-3178");
clientes.toString();

console.table(clientes);
console.table(clientes1);
console.table(clientes2);
console.table(clientes3);
console.table(clientes4);
console.table(clientes5);
console.table(clientes6);
console.table(clientes7);
console.table(clientes8);
console.table(clientes9);
