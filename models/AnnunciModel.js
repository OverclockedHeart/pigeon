// Definizione della classe Annuncio
class Annuncio {
  constructor(id, titolo, descrizione) {
    this.id = id;
    this.titolo = titolo;
    this.descrizione = descrizione;
  }
}

// Gestione della lista degli annunci
class AnnunciList {
  constructor() {
    this.annunci = []; // Array per memorizzare gli annunci
  }

  // Aggiungi un annuncio alla lista
  aggiungiAnnuncio(annuncio) {
    this.annunci.push(annuncio);
  }

  // Rimozione annuncio dalla lista con suo ID
  rimuoviAnnuncio(id) {
    this.annunci = this.annunci.filter((annuncio) => annuncio.id !== id);
  }

  // get di tutti gli annunci
  getAnnunci() {
    return this.annunci;
  }
}

//export { Annuncio, AnnunciList };

module.exports = Annuncio;
module.exports = AnnunciList;
