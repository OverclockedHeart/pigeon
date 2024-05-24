//Inizializzazione e avvio dell'app
//import { RicercaLavoro } from "./appricercalavoro.js";
//import { aggiungiAnnuncio } from "../controllers/AnnunciController.js";
import ("../controllers/AnnunciController.js");


const app = new RicercaLavoro();
app.main();

// Aggiungi alcuni annunci iniziali quando il documento è caricato
document.addEventListener("DOMContentLoaded", () => {
  aggiungiAnnuncio(1, "Annuncio 1", "Descrizione del primo annuncio");
  aggiungiAnnuncio(2, "Annuncio 2", "Descrizione del secondo annuncio");
  aggiungiAnnuncio(3, "Annuncio 3", "Descrizione del terzo annuncio");
  aggiungiAnnuncio(4, "Annuncio 4", "Descrizione del quarto annuncio");
});
