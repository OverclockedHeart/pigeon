import User from "../models/UserModel.js";
import { hashSync, compareSync } from 'bcrypt';

class UsersList {
    #users = [];
    #userLogged = null;

    signup(username, password, email){
        const user = new User();
        
        if (this.#users.find((u) => u === username) !== undefined) console.error("Error: user already exists, please choose a different username.");
        else this.username = username;
        user.password = hashSync(password, 7);
        user.email = email;
        
        this.#users.push(user);
    }

    login(username, password) {
        const user = this.#users.find((user) => username === user.username && compareSync(password, user.password)); 
        
        if (user === undefined) console.error("Error: wrong credentials.");
        else {
            this.#userLogged = user;
            console.log("Login successful!");
        }
    }

    logout(){
        this.#userLogged = null;
        console.log("Logout succcessful.");
    }
}

export default UsersList;