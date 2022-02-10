//Classe abstrata: ela só funciona pra ser herdada. Ajudam a criar abstrações no código e a compartilhar código entre outras classes
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error('Você não deveria instanciar um objeto do tipo Conta diretamente'); //Lançando um obj do tipo erro
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
    //Getters e setters protegem atributos de nossas classes através de encapsulamento

    //Método abstrato: Não é feito pra ser chamado diretamente e sim sobreescrito. Métodos abstratos devem ser sobrescritos pelas classes filhas.
    sacar(valor) {
        throw new Error('O método sacar de Conta é abstrato');
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0; //para se não houver saldo suficiente
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    transferencia(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    // transferir(valor, conta) {
    //     this.sacar(valor);
    //     conta.depositar(valor);
    // }

    //.this: pega o saldo(atributo) da conta corrente especifica na qual estamos mexendo
    //Um método(função) pode e deve acessar atributos de sua classe e para isso usamos a palavra-chave this
    // o if de uma condição simples pode levar o return na mesma linha sem {} "early return"; aqui fizemos primeiro a verificação do que não queremos
}