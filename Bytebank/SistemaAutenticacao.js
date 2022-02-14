//Ser autenticavel significa possuir o método autenticar
//duck type: não interessa o tipo do objeto, interessa se ele tem determinados metodos e propriedades

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel) {
        //Verificar se a chave autenticar existe no objeto autenticavel && se é do tipo função
        return 'autenticar' in autenticavel &&
            autenticavel.autenticar instanceof Function;
    }
}