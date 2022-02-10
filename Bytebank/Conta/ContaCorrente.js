import { Conta } from './Conta.js';

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    //static: atributo da classe que não vai mudar    

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas++;
    }

    //Sobrescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa); //=== return super._sacar(valor, taxa);
    }

    //this.cliente: estou usando o assesor dentro da classe mesmo (e não _cliente), para que seja feita a verificação se é Cliente
    //ContaCorrente.numeroDeContas o acesso a esse atributo é diferente porque não referencia a esta conta que estamos mexendo. É um atributo estático da classe
}