import User from "./user.js";
import Docente from "./Docente.js"
import Admin from "./Admin.js"

const user = new User('Carol', 'vendramini', 'c@c.com', '2020-02-02')
// console.log(User.prototype.isPrototypeOf(user)) //true
user.nome = 'Carolina Ruoso Vendramini'
// console.log(user.nome)
// console.log(user.sobrenome)

const newDocente = new Docente('Mariana', 'm@m.com', '2020-02-02')
const newAdmin = new Admin('Rodrigo', 'Silva', 'r@r.com', '2020-22-20')

console.log(newAdmin.exibirInfos())

// console.log(newAdmin.nome);
// newAdmin.nome = 'Andre'
// console.log(newAdmin.nome);

// console.log(newAdmin.exibirInfos())
// console.log(newAdmin.criarCurso('js', '20'))

// console.log(newDocente.aprovaEstudante('Ju', 'js'))
// console.log(user.exibirInfos())
// console.log(user.montaObjUser())