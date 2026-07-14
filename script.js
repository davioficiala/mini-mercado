let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

const lista = document.getElementById("lista");
const total = document.getElementById("total");
const pesquisa = document.getElementById("pesquisa");

function salvar() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

function atualizarTela() {

    lista.innerHTML = "";

    let filtro = pesquisa.value.toLowerCase();

    let soma = 0;

    produtos
        .filter(p => p.nome.toLowerCase().includes(filtro))
        .forEach((produto, index) => {

            soma += Number(produto.preco);

            lista.innerHTML += `
            <div class="item ${produto.comprado ? "comprado" : ""}">
            
                <div class="info">
                    <div class="nome">${produto.nome}</div>
                    <div class="preco">
                        R$ ${Number(produto.preco).toFixed(2)}
                    </div>
                </div>

                <div class="acoes">

                    <button class="ok"
                    onclick="comprar(${index})">

                    ✔

                    </button>

                    <button class="excluir"
                    onclick="remover(${index})">

                    🗑

                    </button>

                </div>

            </div>
            `;

        });

    total.innerHTML = "R$ " + soma.toFixed(2);

    salvar();

}

function adicionarProduto() {

    let nome = document.getElementById("produto").value;

    let preco = document.getElementById("preco").value;

    if (nome == "" || preco == "") {

        alert("Preencha todos os campos.");

        return;

    }

    produtos.push({

        nome,

        preco,

        comprado: false

    });

    document.getElementById("produto").value = "";
    document.getElementById("preco").value = "";

    atualizarTela();

}

function comprar(index) {

    produtos[index].comprado = !produtos[index].comprado;

    atualizarTela();

}

function remover(index) {

    produtos.splice(index, 1);

    atualizarTela();

}

pesquisa.addEventListener("input", atualizarTela);

atualizarTela();
