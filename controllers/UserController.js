import User from "../models/UserModel.js";

class UsersList {
    #users;
    userLogged;

    constructor(){
        this.#users = [];
        this.userLogged = new User();
    }

    //-----------------------------

    login(username, password){
        let user = this.#users.find((u) => u.username === username);
        
        if (user == undefined || user == null) { //non trova username
            window.alert("Error: wrong credentials.");
            return false;
        } 
        else if (!dcodeIO.bcrypt.compareSync(password, user.password)) { //la password e l'hash non combaciano
            window.alert("Error: wrong password.");
            return false;
        } 
        else {
            this.userLogged = user;
            return user;
        }
    }

    signup(username, password, email, desc){
        let user = new User();
        
        if (this.#users.find((u) => u.username === username) != undefined) 
            window.alert("Error: user already exists, please choose a different username.");
        
        else {
            const salt = dcodeIO.bcrypt.genSaltSync(5);
            user.password = dcodeIO.bcrypt.hashSync(password, salt);

            user.username = username;
            user.email = email;
            user.desc = desc;
            this.#users.push(user);
        }
    }

    editDesc(newDesc){
        let userToEdit = this.#users.find((user) => user === this.userLogged);
        let index = this.#users.indexOf(userToEdit);
        
        userToEdit.desc = newDesc;
        this.#users[index] = userToEdit;
    }

    logout(){
        this.userLogged = null;
        console.log("Logout succcessful.");
    }

    //----------------------------------

    setLoggedUser(user){
        this.userLogged = user;
    }

    getLoggedUser(){
        return this.userLogged;
    }
    
    //----------------------------------

    toPlainObject(){
        return {
            users: this.#users.map(user => user.toPlainObject()),
            userLogged: this.userLogged.toPlainObject(),
            __class__: 'UsersList'
        }
    }

    static fromPlainObject(obj){
        let list = new UsersList();

        let userLogged = User.fromPlainObject(obj.userLogged);

        list.#users = obj.users.map((userObj) => User.fromPlainObject(userObj));
        list.userLogged = userLogged;
        
        return list;
    }
}

export default UsersList;