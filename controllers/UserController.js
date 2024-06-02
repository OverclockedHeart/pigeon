import User from "../models/UserModel.js";
import { hashSync, genSaltSync, compareSync } from 'bcrypt';

class UsersList {
    #users = [];
    #userLogged;

    signup(username, password, email, desc){
        const user = new User();
        
        if (this.#users.find((u) => u.username === username) !== undefined) 
            console.error("Error: user already exists, please choose a different username.");
        
        else {
            user.username = username;
            
            const salt = genSaltSync(5);
            user.password = hashSync(password, salt);

            user.email = email;
            user.desc = desc;
            this.#users.push(user);
        }
    }

    login(username, password) {
        const user = this.#users.find((u) => u.username === username);
        
        if (user === undefined) console.error("Error: wrong credentials."); //non trova username
        else if (compareSync(password, user.password) === false) console.error("Error: wrong password."); //la password e l'hash non combaciano
        else {
            this.#userLogged = user;
            console.log("Login successful!");
        }
    }

    returnLoggedUserID(){
        if (this.#userLogged === null) console.error("Error: no user logged in yet.");
        else return this.#userLogged.id;
    }

    logout(){
        this.#userLogged = null;
        console.log("Logout succcessful.");
    }
}

export default UsersList;