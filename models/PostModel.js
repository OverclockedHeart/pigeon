class Post {
  constructor(titolo, descrizione) {
    this.id = Math.random(); //needs to change w/something better
    this.titolo = titolo;
    this.descrizione = descrizione;
    this.author = null;
  }
}

export default Post;