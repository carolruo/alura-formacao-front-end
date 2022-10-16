const arr = require('./listaLivros');

function menorValor(arr, posicao) {
  let maisBarato = posicao;
  for (let atual = posicao; atual < arr.length; atual++) {
    if (arr[atual].preco < arr[maisBarato].preco) {
      maisBarato = atual
    }
  }
  return maisBarato;
}

module.exports = menorValor;