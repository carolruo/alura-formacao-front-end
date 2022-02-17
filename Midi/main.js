'use strict'

function tocaSom(event) {
    const elemento = document.querySelector(event);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado');
    }

}
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i]; //saída ex: botão tecla pom
    const instrumento = tecla.classList[1]; //saída ex: "tecla_pom" selecionou a segunda classe declarada no botão tecla pom
    const idAudio = `#som_${instrumento}`; //som_tecla_pom

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}



/*Os parâmetros servem para auxiliar em alguma lógica no código dentro de uma função. Por exemplo, uma função calculaMedia(), pode ter como parâmetros notaA e notaB, que serão os valores utilizados para serem caclulados e retornar o valor da média. 
Caso nenhum valor for informado a uma função com parâmetro o JavaScript informa que este parâmetro é undefined
querySelector = busca um elemento através do seu seletor ()
Loop for: auxiliar o acesso a cada elemento dentro da lista de teclas, podendo aplicar a rotina de associar uma função no atributo onclick de cada um destes elementos

*/
