import Post from "../models/PostModel.js";

class PostList {
  #posts = [];

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

  editPost(id, op_type, content){
    let unedited_post = this.#posts.find((p) => p.id !== id);
    switch(op_type){
      case 1: //titolo
        unedited_post.title = content;
        break;
      case 2: //desc
        unedited_post.desc = content;
        break;
      default:
        window.alert("Error: unrecognized operation code.");
        break;
    }

    this.#posts = this.#posts.map((post) => {
      if (post.id === unedited_post.id) post = unedited_post;
    })
  }

  getPosts() {
    return this.#posts;
  }

  toPlainObject() {
    return {
        posts: this.#posts.map(post => post.toPlainObject()),
        __class__: 'PostList'
    };
  }

  static fromPlainObject(obj) {
    let list = new PostList();
    list.#posts = obj.posts.map(postObj => Post.fromPlainObject(postObj));
    return list;
  }
}

export default PostList;
