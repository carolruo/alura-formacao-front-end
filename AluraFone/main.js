const listaNumeros = document.querySelectorAll("input[type = 'button']");
const inputTel = document.querySelector("input[type = 'tel']");

for (let i = 0; i < listaNumeros.length; i++) {
    const numero = listaNumeros[i];
    const numeroValor = numero.value;

    console.log(inputTel)
    numero.onclick = function () {
        inputTel.value = inputTel.value + numero.value;
    }

}

// const listaDeTeclas = document.querySelectorAll('input[type=button]');
// const inputTel = document.querySelector('input[type=tel]');

// for (indice = 0; indice < listaDeTeclas.length; indice++) {

//     const tecla = listaDeTeclas[indice];

//     tecla.onclick = function () {
//         inputTel.value = inputTel.value + tecla.value;
//     }
// }