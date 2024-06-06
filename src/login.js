import PigeonApp from "../controllers/app.js";

function saveStateToStorage(app){ //accepts a PigeonApp object
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    app.login(username, password);
    const app_string = JSON.stringify(app);
    
    localStorage.setItem("app", app_string);
}

document.addEventListener("DOMContentLoaded", function(){
    let app = localStorage.getItem("app");
    let parsed_app = Object.assign(new PigeonApp(), JSON.parse(app));
    
    document.getElementById("loginForm").addEventListener("submit", function(event){
        saveStateToStorage(parsed_app);
        event.preventDefault();
    })
});