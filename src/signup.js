import { loadPigeonAppFromLocalStorage, savePigeonAppToLocalStorage } from "../utils/serialize.js";

document.addEventListener("submit", function(){
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;
    let email = document.getElementById("emailInput").value;
    
    let app = loadPigeonAppFromLocalStorage();
    app.signup(username, password, email, "");
    savePigeonAppToLocalStorage(app);
})