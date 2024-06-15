import PostList from "../controllers/PostController.js";
import UsersList from "../controllers/UserController.js";

export default class PigeonApp {
    #app_users;
    #app_posts;
    
    constructor(){
        this.#app_users = new UsersList();
        this.#app_posts = new PostList();
    }
    //----------------------------

    login(username, password){
        this.#app_users.login(username, password);
    }
    
    signup(username, password, email, desc){
        this.#app_users.signup(username, password, email, desc);
    }
    
    editDesc(newDesc){
        this.#app_users.editDesc(newDesc);
    }

    logout(){
        this.#app_users.logout()   
    }

    //----------------------------

    getLoggedUser(){
        return this.#app_users.userLogged;
    }

    getUserByID(id){
        return this.#app_users.getUserByID(id);
    }

    //----------------------------

    addPost(titolo, desc, userID){
        this.#app_posts.addPost(titolo, desc, userID);
    }

    removePost(id){
        this.#app_posts.removePost(id);
    }

    editPost(id, op_type, content){
        this.#app_posts.editPost(id, op_type, content);
    }

    getPosts(){
        return this.#app_posts.getPosts();
    }
    
    //-----------------------------

    toPlainObject() {
        return {
            app_users: this.#app_users.toPlainObject(),
            app_posts: this.#app_posts.toPlainObject(),
            __class__: 'PigeonApp'
        }
    }

    static fromPlainObject(obj) {
        let app = new PigeonApp();
        app.#app_users = UsersList.fromPlainObject(obj.app_users);
        app.#app_posts = PostList.fromPlainObject(obj.app_posts);
        return app;
    }
}