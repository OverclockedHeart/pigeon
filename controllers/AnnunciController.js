import { Annuncio, AnnunciList } from "../models/AnnunciModel.js";

// Istanza della lista degli annunci
const listaAnnunci = new AnnunciList();

// Funzione per aggiungere un annuncio
function aggiungiAnnuncio(id, titolo, descrizione) {
  const nuovoAnnuncio = new Annuncio(id, titolo, descrizione);
  listaAnnunci.aggiungiAnnuncio(nuovoAnnuncio);
  aggiornaDOM(); // Aggiorna il DOM dopo aver aggiunto un annuncio
}

// Funzione per rimuovere un annuncio dato il suo ID
function rimuoviAnnuncio(id) {
  listaAnnunci.rimuoviAnnuncio(id);
  aggiornaDOM(); // Aggiorna il DOM dopo aver rimosso un annuncio
}

// Funzione per ottenere tutti gli annunci
function visualizzaAnnunci() {
  return listaAnnunci.getAnnunci();
}

// Funzione per aggiornare il DOM con la lista degli annunci
function aggiornaDOM() {
  const ul = document.getElementById("annunci-list");
  ul.innerHTML = ""; // Pulisce la lista

  // Crea e aggiunge gli elementi della lista al DOM
  visualizzaAnnunci().forEach((annuncio) => {
    const li = document.createElement("li");
    li.textContent = `${annuncio.titolo}: ${annuncio.descrizione}`;

    const button = document.createElement("button");
    button.textContent = "Cancella";
    button.onclick = () => rimuoviAnnuncio(annuncio.id);

    li.appendChild(button);
    ul.appendChild(li);
  });
}

export { aggiungiAnnuncio, rimuoviAnnuncio, visualizzaAnnunci };
