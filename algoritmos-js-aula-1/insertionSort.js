const livros = require('./listaLivros');

function insertionSort(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        
        while (i > 0 && arr[i].preco < arr[i-1].preco) {
            let itemAtual = arr[i];
            let itemAnterior = arr[i-1];
        
            arr[i] = itemAnterior;
            arr[i-1] = itemAtual;

            i--;
        }
    }

    console.log(arr);
}

insertionSort(livros);