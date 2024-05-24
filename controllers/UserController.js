import User from "../models/UserModel.js";
import { hashSync, compareSync } from 'bcrypt';

class Users {
    #users = [];

    signup(username, password, email){
        const user = new User();
        user.username = username;
        user.password = hashSync(password, 7);
        user.email = email;
        this.#users.push(user);
    }

    login(username, password) {
        const user = this.#users.find((user) => username === user.username && compareSync(password, user.password)); 
        if (user === undefined) console.error("Error: wrong credentials.");
        else {
            console.log("Login successful!");
            return user;
        }
    }
}