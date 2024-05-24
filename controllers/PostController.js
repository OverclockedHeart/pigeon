import { Post } from "../models/#PostModel.js";

class PostList {
  #posts = [];

  addPost(titolo, descrizione){
    const new_post = new Post();
    new_post.titolo = titolo;
    new_post.descrizione = descrizione;

    this.#posts.push(new_post);
  }

  removePost(id) {
    this.#posts = this.#posts.filter((p) => p.id !== id);
  }

  getPosts() {
    return this.#posts;
  }
}

export default PostList;
