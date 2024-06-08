import User from "../models/UserModel.js";

class UsersList {
    users = [];
    userLogged = undefined;

    signup(username, password, email, desc){
        let user = new User();
        
        if (this.users.find((u) => u.username === username) != undefined) 
            window.alert("Error: user already exists, please choose a different username.");
        
        else {
            user.username = username;
            
            const salt = dcodeIO.bcrypt.genSaltSync(5);
            user.password = dcodeIO.bcrypt.hashSync(password, salt);

            user.email = email;
            user.desc = desc;
            this.users.push(user);
        }
    }

    login(username, password) {
        let user = this.users.find((u) => u.username === username);
        
        if (user === undefined) window.alert("Error: wrong credentials."); //non trova username
        else if (dcodeIO.bcrypt.compareSync(password, user.password) === false) console.error("Error: wrong password."); //la password e l'hash non combaciano
        else {
            this.userLogged = user;
            console.log("Login successful!");
        }
    }

    returnLoggedUserID(){
        if (this.userLogged === null) console.error("Error: no user logged in yet.");
        else return this.userLogged.id;
    }

    logout(){
        this.userLogged = null;
        console.log("Logout succcessful.");
    }
}

export default UsersList;