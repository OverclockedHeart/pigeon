class Post {
  constructor(titolo, descrizione) {
    this.id = Math.random();
    this.titolo = titolo;
    this.descrizione = descrizione;
    this.author = null;
  }
}

export default Post;