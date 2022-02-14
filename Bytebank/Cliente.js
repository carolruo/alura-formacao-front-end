export class Cliente {
    //atributos ou propriedades do cliente: nome e cpf

    get cpf() {
        return this._cpf;
    }

    //A inicialização de atributos é a principal responsabilidade do construtor.
    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(senha) {
        return true;
    }
}