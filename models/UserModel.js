import { generateID } from "../utils/id_gen.js";

class User {
    constructor(username, password, email, desc){
        this.id = "U_" + generateID();
        this.username = "";
        this.email = "";
        this.password = "";
        this.desc = "";
    }
}

export default User;