import { Post } from "../models/#PostModel.js";
import { UsersList } from "./UserController.js";

class PostList {
  #posts = [];

  addPost(titolo, descrizione, user){
    const new_post = new Post();
    new_post.titolo = titolo;
    new_post.descrizione = descrizione;
    new_post.author = user.returnLoggedUserID(); //id autore del post

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
