import PigeonApp from "../controllers/app.js";

function saveStateToStorage(app){ //accepts a PigeonApp object
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    app.login(username, password);
    const stringified_app = JSON.stringify(app);
    
    localStorage.setItem("app", stringified_app);
}

const stringified_app = localStorage.getItem("app");
const parsed_app = JSON.parse(stringified_app);

document.getElementById(loginForm).addEventListener("submit", function(event){
    event.preventDefault();
    saveStateToStorage(parsed_app);
});