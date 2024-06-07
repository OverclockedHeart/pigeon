import PigeonApp from "../controllers/app.js";
import UsersList from "../controllers/UserController.js";

function saveLoginToStorage(){
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    
    let app = new PigeonApp();
    app = Object.assign(app, JSON.parse(window.localStorage.getItem("app")));
    app.current_users.login(username, password);
    
    const app_string = JSON.stringify(app);
    window.localStorage.setItem("app", app_string);
};

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("loginForm").addEventListener("submit", function(event){
        saveLoginToStorage();
        event.preventDefault();
        window.location.href.replace("./page/pigeon_page.html");
    })
});