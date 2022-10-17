export default class User {
  #nome
  #sobrenome
  #email
  #nascimento
  #role
  #ativo

  constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
    this.#nome = nome
    this.#sobrenome = sobrenome
    this.#email = email
    this.#nascimento = nascimento
    this.#role = role || 'estudante'
    this.#ativo = ativo
  }

  get nome() {
    return `${this.#nome} ${this.#sobrenome}`
  }

  get sobrenome() {
    return this.#sobrenome
  }

  get email() {
    return this.#email
  }

  get nascimento() {
    return this.#nascimento
  }

  get role() {
    return this.#role
  }

  get ativo() {
    return this.#ativo
  }

  set nome(nome) {
    if (nome === '') {
      throw new Error('Formato inválido')
    }
    let [nomeNovo, ...sobrenome] = nome.split(" ") //...sobrenome = [ 'Ruoso', 'Vendramini' ]
    sobrenome = sobrenome.join(' ')
    this.#nome = nomeNovo
    this.#sobrenome = sobrenome
  }
  set email(email) {
    this.#email = email
  }
  set nascimento(nascimento) {
    this.#nascimento = nascimento
  }
  set role(role) {
    this.#role = role
  }
  set ativo(ativo) {
    this.#ativo = ativo
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`
  }

}
