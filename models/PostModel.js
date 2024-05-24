class Post {
  constructor(titolo, descrizione) {
    this.id = Math.random();
    this.titolo = titolo;
    this.descrizione = descrizione;
  }
}

export default Post;