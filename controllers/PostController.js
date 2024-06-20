import Post from "../models/PostModel.js";

class PostList {
  #posts;

  constructor(){
    this.#posts = [];
  }

  addPost(title, desc, userID){
    const new_post = new Post();
    new_post.title = title;
    new_post.desc = desc;
    new_post.author = userID; //id autore del post

    this.#posts.push(new_post);
  }

  removePost(id) {
    this.#posts = this.#posts.filter((p) => p.id !== id);
  }

  editPost(id, newTitle, newDesc){
    let unedited_post = this.#posts.find((post) => id === post.id);
    if (newTitle != null) unedited_post.title = newTitle;
    if (newDesc != null) unedited_post.desc = newDesc;

    for (let post of this.#posts){
      if (post.id === unedited_post.id) post = unedited_post;
      break; 
    }
  }

  getPosts() {
    let posts = this.#posts;
    return posts;
  }

  //----------------------------------------

  toPlainObject() {
    return {
        posts: this.#posts.map(post => post.toPlainObject()),
        __class__: 'PostList'
    }
  }

  static fromPlainObject(obj) {
    let list = new PostList();
    list.#posts = obj.posts.map(postObj => Post.fromPlainObject(postObj));
    return list;
  }
}

export default PostList;
