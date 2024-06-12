import User from "../models/UserModel.js";

class UsersList {
    #users;
    #userLogged;

    constructor(){
        this.#users = [];
        this.#userLogged = null;
    }

    login(username, password) {
        let user = this.#users.find((u) => u.username === username);
        
        if (user == undefined || user == null) {
            window.alert("Error: wrong credentials.");
            return false;
        } //non trova username
        else if (!dcodeIO.bcrypt.compareSync(password, user.password)) {
            window.alert("Error: wrong password.");
            return false;
        } //la password e l'hash non combaciano
        else {
            this.#userLogged = user;
            window.alert("Login successful!");
            return true;
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
        let userToEdit = this.#users.find((user) => user === this.#userLogged);
        let index = this.#users.indexOf(userToEdit);
        
        userToEdit.desc = newDesc;
        this.#users[index] = userToEdit;
    }

    logout(){
        this.#userLogged = null;
        console.log("Logout succcessful.");
    }

    returnLoggedUserID(){
        if (this.#userLogged == null || this.#userLogged == undefined) console.error("Error: no user logged in yet.");
        else return this.#userLogged.id;
    }

    //----------------------------------

    toPlainObject(){
        return {
            users: this.#users.map(user => user.toPlainObject()),
            userLogged: this.#userLogged ? this.#userLogged.toPlainObject() : null,
            __class__: 'UsersList'
        }
    }

    static fromPlainObject(obj) {
        let list = new UsersList();
        list.#users = obj.users.map((userObj) => User.fromPlainObject(userObj));
        list.#userLogged = obj.userLogged ? User.fromPlainObject(obj.userLogged) : null;
        return list;
    }
}

export default UsersList;