// Prodotti
class Prodotto {
  constructor(id, nome, descrizione, quantità, immagine) {
    this.id = id;
    this.nome = nome;
    this.descrizione = descrizione;
    this.quantità = quantità;
    this.immagine = immagine;
  }
}

let prodotti = [];

// Sezione Aggiungi
let aggiungiNome = document.getElementById("aggiungi-nome");
let aggiungiDesc = document.getElementById("aggiungi-descrizione");
let aggiungiQuant = document.getElementById("aggiungi-quantità");
let aggiungiImg = document.getElementById("aggiungi-immagine");
let aggiungiBtn = document.getElementById("aggiungi-btn");

// Funzioni
function aggiungiProdotto() {
  let nome = aggiungiNome.value;
  let descrizione = aggiungiDesc.value;
  let quant = aggiungiQuant.value;
  let imgSrc = null;
  let id = prodotti.length;

  if (
    nome === "" ||
    nome === null ||
    descrizione === "" ||
    descrizione === null ||
    quant === "" ||
    quant === null ||
    quant / quant != 1 ||
    !aggiungiImg.files ||
    !aggiungiImg.files[0]
  ) {
    console.log(
      nome,
      descrizione,
      quant,
      aggiungiImg.files,
      aggiungiImg.files[0]
    );
    alert("Devi compilare tutti i campi correttamente!");
    return;
  }

  imgSrc = URL.createObjectURL(aggiungiImg.files[0]);

  let prodottoCont = document.createElement("div");
  prodottoCont.id = "prodotto";
  prodottoCont.classList.add("prodotto");
  prodottoCont.classList.add(id);

  let imgProdotto = document.createElement("img");
  imgProdotto.src = imgSrc;
  imgProdotto.width = 50;
  imgProdotto.height = 50;
  prodottoCont.append(imgProdotto);

  let idProdotto = document.createElement("span");
  idProdotto.textContent = "ID: " + id;
  prodottoCont.append(idProdotto);

  let nomeProdotto = document.createElement("span");
  nomeProdotto.textContent = "Nome: " + nome;
  prodottoCont.append(nomeProdotto);

  let descProdotto = document.createElement("span");
  descProdotto.textContent = "Descrizione: " + descrizione;
  prodottoCont.append(descProdotto);

  let quantProdotto = document.createElement("span");
  quantProdotto.textContent = "Quantità: " + quant;
  prodottoCont.append(quantProdotto);

  let rimuoviBtn = document.createElement("button");
  rimuoviBtn.textContent = "Rimuovi";
  rimuoviBtn.classList.add("rimuovi-btn");
  prodottoCont.append(rimuoviBtn);

  // Add the event listener directly when the button is created
  rimuoviBtn.addEventListener("click", function () {
    rimuoviProdotto(id);
    prodottoCont.remove();
  });

  document.querySelector(".prodotti").appendChild(prodottoCont);

  prodotti.push(new Prodotto(id, nome, descrizione, quant, imgSrc));
}

function rimuoviProdotto(id) {
  prodotti = prodotti.filter(function (prodotto) {
    return prodotto.id !== id;
  });
}