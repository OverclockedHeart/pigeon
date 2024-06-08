import PostList from "../controllers/PostController.js";
import UsersList from "../controllers/UserController.js";

export default class PigeonApp {
    constructor(){
        this.current_users = new UsersList();
        this.posts = new PostList();
    }

    login(username, password){
        this.current_users.login(username, password);
    }
}