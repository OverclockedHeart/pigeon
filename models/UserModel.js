class User {
    constructor(id, username, password, email, desc){
        this.id = Math.random(); //needs to change w/something better
        this.username = "";
        this.email = "";
        this.password = "";
        this.desc = "";
    }
}

export default User;