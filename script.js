let carrinho = [];

let produtos = [
  {
    nome: "Tênis Esportivo",
    preco: 199.90,
     "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhITExIWFhUWGBUXGBgTFxUbFxUVFxcXGBUaFxoYHiogGB4mHhgVITEhJSkrLi4vFx8zPTUtNygtLisBCgoKDg0NFQ8PFS0ZFR0rLS0rLS0rKy0rNy0rKysrLS0tKystKys3LS0rLTctNy03LSsrKy0rNystNy0tKystLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xABJEAABAwIDBAQJCAcHBQEAAAABAAIDBBESITEFB0FRBmFxgRMiMmKRobHB8BQjM0JSctHSRIKSk7LC4RUWQ1RzovEkNJTT4xf/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABcRAQEBAQAAAAAAAAAAAAAAAAARARL/2gAMAwEAAhEDEQA/AJxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEVB9bEH+DMjA/7Jc3F6L3VdAREQEREBERAREQEREBERAREQEREBERAREQERY7au3qamLWzzsjL/JDjmQNTbl1oMiit6OtilbiikZI3mxwcPSFcICIiAqNbVMijfK82YxrnuJ4NaLn2KstB30bYbDQGK/jTuDbeYwh8l+rIN/XQQttbb0c00kskoLpHlxzva5yFxoALAcgAt/oN67TH4KMsjlADWOfIDFfIDEMIDfZ1jVRXDEzynNFyeQXiaijeL2A1z005c1B0tU9MmU5hFYzwYmjDg9njsDwBjYcNzkSLEXBB4WV/s/pbQzAmOqiytcOcGOFzYXa+xGeWi5soKSd0bWh7nRsvh8M44WjiGDgMhpl1rF1kjDe4A623GnG2l9M7cM0o7BBRc+dD95E9DE5uA1EdgWxufhMZyvhNnWBGeC2ueVzeWOj28Ciqad05kEIYGeEEpAw4zhab6EFxtzvqAqNrRUaSrjlaHxSNe0/WY4OHpCrICIiAiIgIiICIiAiIgIiICIiAtF6a9E6baL7yOfHLGCxskZFw297OaRZwvc889VvS1SpqQx7nOc1oLnZuc0DU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48VtHNJa4dhC0Su3IUjiTHU1EfIHA4D/AGg+tSoikKhOfcZIPo9oftw/g9WU25Ct0FZAR1xvGnYp5XyyQc/Tbl9pHLw9Kf3g/kVvJuc2qRbFSdz5PyLomyWQc5ybn9rHL/puGkj+Bv8AZXl+6Hax4U2oOUjuBv8AZXRuFMKDnM7o9rGwIphY3+kPubmvp3P7VNs6XLP6R/5F0XhXzCg50dug2rl/22XKR/5FSk3S7W+xBzyk/ELpDCmFIOaZd1m17W+TxHslb7yrebdttjMfIb9Ylh97107hTCg5dPQLawy/s9/c6M+xyojoTtZgA/s+U25C9/QV1RhTCg5R/untVot/Z0+pP0bzqb8F4/uttW+L5BPpb6GT/ldY4UwoOUWdE9rXJ+QT55/RO5W7l6Z0K2tbD8hntn/hga9a6swr7hRXK46C7WNr0M2Vj5IGY00KuGdBtqnWim7/AOpXUGFfcKQrmqn3fbUP6E8drox7XLK0+7fap1iDfvSs9xK6Awr7ZTkqE6XdZtA+VLEz9Zx9gWbod1Uo+kq/2Gn3qUkTkrUNn7v6eO2J8jz1mwWy0ez44xZjbK6RWYUREVQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k="
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