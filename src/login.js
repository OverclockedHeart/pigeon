import PigeonApp from "../controllers/app.js";
import UsersList from "../controllers/UserController.js";

function saveLoginToStorage(){
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    
    let app_string = window.localStorage.getItem("app");
    let app;

    if (app_string == undefined || app_string == null) {
        app = new PigeonApp();
    } else {
        app = JSON.parse(app_string);
        Object.setPrototypeOf(app, PigeonApp.prototype);
        
        if (app.current_users){
            Object.setPrototypeOf(app.current_users, UsersList.prototype);
        } else {
            app.current_users = new UsersList();
        }
    }

    //a quanto pare, Object.setPrototypeOf e Object.assign non assegnano in automatico le classi importate

    app.login(username, password);
    
    app_string = JSON.stringify(app);
    window.localStorage.setItem("app", app_string);
};

document.getElementById("loginForm").addEventListener("submit", function(event){
    saveLoginToStorage();
    event.preventDefault();
    window.location.href = "./page/pigeon_page.html";
});