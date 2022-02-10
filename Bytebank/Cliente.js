export class Cliente {
    //atributos ou propriedades do cliente: nome e cpf

    get cpf() {
        return this._cpf;
    }

    //A inicialização de atributos é a principal responsabilidade do construtor.
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}