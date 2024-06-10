import { generateID } from "../utils/id_gen.js";

class Post {
  constructor(title, desc, author = null) {
    this.id = "P_" + generateID();
    this.title = title;
    this.desc = desc;
    this.author = null;
  }
  
  //--------------------------------

  toPlainObject() {
    return {
        id: this.id,
        title: this.title,
        desc: this.desc,
        author: this.author,
        __class__: 'Post'
    }
  }
  
  static fromPlainObject(obj) {
    let post = new Post(obj.title, obj.desc, obj.author);
    post.id = obj.id;
    return post;
  }
}

export default Post;