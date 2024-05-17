class User {
    username: string;
    email: string;
    desc: string;
    tags: string[];

    constructor(setUser: string, setEmail: string, setDesc: string, setTags: string[]){
        this.username = setUser;
        this.email = setEmail;
        this.desc = setDesc;
        this.tags = setTags;
    }
}

class App {
    users: User[];

    constructor(){
        this.users = [];
    }

    printUsers(){
        for (let i=0; i<this.users.length; i++){
            console.log(this.users[i].username + "\n" + this.users[i].email + "\n" + this.users[i].desc + "\n" + this.users[i].tags + "\n");
        }
    }
}

let app_template = new App;
app_template.users.push(new User("Marco Rossi", "marcorossi@hotmail.com", "Cercasi lavoro da magazziniere", ["magazzini", "logistica", "trasporto merci"]));
app_template.users.push(new User("Carlo Bianchi", "carlobianchi@hotmail.com", "Cercasi lavoro da magazziniere", ["magazzini", "logistica", "trasporto merci"]));
app_template.printUsers();