import Post from "../models/PostModel.js";
import UsersList from "./UserController.js";

class PostList {
  #posts = [];

  addPost(titolo, descrizione, user){
    const new_post = new Post();
    new_post.titolo = titolo;
    new_post.descrizione = descrizione;
    new_post.author = userlist.returnLoggedUserID(); //id autore del post (ha bisogno di userlist)

    this.#posts.push(new_post);
  }

  removePost(id) {
    this.#posts = this.#posts.filter((p) => p.id !== id);
  }

  getPosts() {
    return this.#posts;
  }
}

/*
let userlist = new UsersList;
let postlist = new PostList;

userlist.signup("hi", "cuck", "hello@hi.com");
userlist.login("hi", "cuck");
postlist.addPost("first post", "description", userlist.returnLoggedUserID());
console.log(postlist.getPosts());
*/

export default PostList;
