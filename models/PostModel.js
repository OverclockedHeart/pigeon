import { generateID } from "../utils/id_gen.js";

class Post {
  constructor(titolo, descrizione) {
    this.id = "P_" + generateID();
    this.titolo = titolo;
    this.descrizione = descrizione;
    this.author = null;
  }
}

export default Post;