import User from "./User.js";

export default class Admin extends User {
    constructor(nome, sobrenome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, sobrenome, email, nascimento, role, ativo)
    }

    exibirInfos() {
        return `${this.nome}, ${this.role}`
      }

    criarCurso(nome, vagas) {
        return `Curso de ${nome} criado com ${vagas} vagas`
    }
}