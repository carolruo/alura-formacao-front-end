async function buscaEndereco(cep) {
    const erroCampoCpf = document.getElementById('erro');
    erroCampoCpf.innerHTML = "";
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let cepJson = await consultaCEP.json();
        if (cepJson.erro) {
            throw Error('CEP Inexistente');
        }
        const cidade = document.getElementById('cidade');
        const endereco = document.getElementById('endereco');
        const estado = document.getElementById('estado');
        const bairro = document.getElementById('bairro');

        cidade.value = cepJson.localidade;
        endereco.value = cepJson.logradouro;
        estado.value = cepJson.uf;
        bairro.value = cepJson.bairro;
        console.log(cepJson);
        return cepJson;
    } catch (erro) {
        erroCampoCpf.innerHTML = `<p>CEP Inválido</p>`
        throw Error('CEP Inválido');
    }
    
}

const cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));


// let consultaCEP1 = fetch('https://viacep.com.br/ws/17526716/json/');
// console.log('Promise sempre retorna uma promise com obj Response:');
// console.log(consultaCEP1);

// let consultaCEP2 = fetch('https://viacep.com.br/ws/17526716/json/').then(resposta => resposta.json());
// console.log('Usando then para transformar response em json, retorna uma promise comOobject:');
// console.log(consultaCEP2);


// console.log('Dando outro then para mostrar o json dentro do obj:')
// let consultaCEP3 = fetch('https://viacep.com.br/ws/01001250/json/')
//                     .then(resposta => resposta.json())
//                     .then(r => {
//                         if (r.erro) {
//                             throw Error('Esse cep não existe!')
//                         } else
//                             console.log(r)
//                     })
//                     .catch(erro => console.log(erro))
//                     .finally(msg => console.log('Processamento concluído'));