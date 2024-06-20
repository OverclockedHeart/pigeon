import { loadPigeonAppFromLocalStorage, savePigeonAppToLocalStorage } from "../utils/serialize.js";
import { renderPosts } from "../utils/render_posts.js";

const app = loadPigeonAppFromLocalStorage();
const postList = document.getElementById("postList");

renderPosts(app, postList);

if (app.getLoggedUser() === null) document.getElementById("dashboardButton").remove()
else {
    let header = document.querySelector("header nav");
    let newelement = document.createElement("button");
    
    newelement.innerText = "Logout";
    newelement.onclick = () => {
        app.logout()
        savePigeonAppToLocalStorage(app);
    };

    document.getElementById("loginButton").remove();
    document.getElementById("signupButton").remove();
    
    header.appendChild(newelement);
}