let carrinho = [];

let produtos = [
  {
    nome: "Tênis Esportivo",
    preco: 199.90,
    imagem: "https://img.freepik.com/vetores-premium/conceito-de-biblioteca-de-leitura-para-amantes-de-livros_88465-2435.jpg""
  },
  {
    nome: "Camiseta Básica",
    preco: 49.90,
    imagem: "imagens/camiseta.jpg"
  },
  {
    nome: "Relógio Moderno",
    preco: 129.90,
    imagem: "imagens/relogio.jpg"
  }
];

while (produtos.length < 100) {
  let base = produtos[produtos.length % 3];
  produtos.push({
    nome: base.nome + " " + produtos.length,
    preco: base.preco,
    imagem: base.imagem
  });
}

function renderProdutos(lista) {
  let html = "";
  lista.forEach(p => {
    html += `
    <div class="product">
      <img src="${p.imagem}">
      <h4>${p.nome}</h4>
      <p>R$ ${p.preco}</p>
      <button onclick="addCarrinho('${p.nome}', ${p.preco})">Adicionar ao carrinho</button>
    </div>`;
  });
  document.getElementById("produtos").innerHTML = html;
}

function addCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  let lista = "";
  let total = 0;

  carrinho.forEach(p => {
    lista += `<li>${p.nome} - R$ ${p.preco}</li>`;
    total += parseFloat(p.preco);
  });

  document.getElementById("carrinho").innerHTML = lista;
  document.getElementById("total").innerText = total.toFixed(2);
}

function buscar() {
  let termo = document.getElementById("search").value.toLowerCase();
  let filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(termo)
  );
  renderProdutos(filtrados);
}

function finalizarCompra() {
  let metodo = document.getElementById("pagamento").value;
  let link = "https://wa.me/5516999999999";

  alert("Pagamento via " + metodo + ". Redirecionando...");
  window.location.href = link;
}

renderProdutos(produtos);