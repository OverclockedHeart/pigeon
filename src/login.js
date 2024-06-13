import PigeonApp from "../controllers/app.js";
import { loadPigeonAppFromLocalStorage, savePigeonAppToLocalStorage } from "../utils/serialize.js";

document.addEventListener("submit", function(){
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;
    let app = loadPigeonAppFromLocalStorage();

    {
        app.login(username, password);
        savePigeonAppToLocalStorage(app);
        window.location.assign("../page/index.html");
}
});
