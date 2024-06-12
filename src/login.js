import { loadPigeonAppFromLocalStorage, savePigeonAppToLocalStorage } from "../utils/serialize.js";

document.addEventListener("submit", function(){
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;
    let app = loadPigeonAppFromLocalStorage();

    {
        let loginResult = app.login(username, password);
        if (loginResult){
            savePigeonAppToLocalStorage(app);
            window.location.href = "../page/index.html";
        }
    }
});
