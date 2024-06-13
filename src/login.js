import User from "../models/UserModel.js";
import { loadPigeonAppFromLocalStorage, savePigeonAppToLocalStorage } from "../utils/serialize.js";

document.addEventListener("submit", function(){
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;
    let app = loadPigeonAppFromLocalStorage();

    {
        let loginResult = app.login(username, password);
        if (loginResult != null){
            window.alert("Login successful!");
            app.setLoggedUser(loginResult);
            savePigeonAppToLocalStorage(app);
        }
    }
});
