import { Cliente } from './Cliente.js';
import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { ContaSalario } from './Conta/ContaSalario.js';

//o cliente é um objeto criado a partir do molde da classe, ou, o cliente é uma instancia da classe, instanciamos um obj a partir dessa classe usando o operador new
const cliente1 = new Cliente('Ricardo', 11122233345);
// cliente1.nome = 'Ricardo';
// cliente1.cpf = 11122233309;
//não preciso mais declarar as duas linhas acima, pois declarei dentro do construtor ()

const contaCorrente1 = new ContaCorrente(cliente1, 1001);
const contaPoupanca1 = new ContaPoupanca(0, cliente1, 1001);
const contaSalario1 = new ContaSalario(cliente1);

contaCorrente1.depositar(500);
contaPoupanca1.sacar(100);

console.log();