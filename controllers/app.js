import PostList from "../controllers/PostController.js";
import UserList from "../controllers/UserController.js";

export default class PigeonApp {
    posts = new PostList;
    current_users = new UserList;
}