const form = document.getElementById("novoItem");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((item) => criaElemento(item));

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    const novoItem = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    const itemJaExiste = itens.find(elemento => elemento.nome === nome.value);

    if (itemJaExiste) {
        novoItem.id = itemJaExiste.id;
        document.querySelector("[data-id='"+novoItem.id+"']").innerHTML = novoItem.quantidade;
        itens[itens.findIndex(elem => elem.id === itemJaExiste.id)] = novoItem;
    } else {
        novoItem.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;
        criaElemento(novoItem);
        itens.push(novoItem);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
});

function criaElemento(item) {
    const strong = document.createElement('strong');
    strong.innerHTML = item.quantidade;
    strong.dataset.id = item.id;

    const li = document.createElement('li');
    li.classList.add("item");

    li.appendChild(strong);
    li.innerHTML += item.nome;

    li.appendChild(botao(item.id));

    const ul = document.getElementById("lista");
    ul.appendChild(li);
}

function botao(id) {
    const botao = document.createElement("button");
    botao.innerText = "X";

    botao.addEventListener("click", function() {
        this.parentNode.remove();
        itens.splice(itens.findIndex(elem => elem.id === id), 1);
        localStorage.setItem("itens", JSON.stringify(itens));
    })

    return botao;
}







//console.log(e); evento, no caso de submit, um SubmitEvent
// e.target pega a tag, no caso pega o form para o evento de submit
// console.log(e.target[0].value); nome entrada
// console.log(e.target[1].value); quantidade entrada