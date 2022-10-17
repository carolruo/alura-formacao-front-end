import User from "./user.js";

export default class Docente extends User {
    constructor(nome, sobrenome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, sobrenome, email, nascimento, role, ativo)
    }

    aprovaEstudante(nome, curso) {
        return `O estudante ${nome} aprovado no curso ${curso} pelo docente ${this.nome}`
    }
}
