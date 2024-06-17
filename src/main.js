import { loadPigeonAppFromLocalStorage, savePigeonAppToLocalStorage } from "../utils/serialize.js";
import { renderPosts } from "./dashboard.js";

const app = loadPigeonAppFromLocalStorage();
const postList = app.getPosts();

renderPosts(app, postList);

if (app.getLoggedUser()){
    document.getElementById("loginButton").remove();
    document.getElementById("signupButton").remove();
    document.getElementById("signupButton").remove();

    let newelement = document.createElement("button");
    newelement.innerText = "Logout";
    newelement.onclick = app.logout();

    let header = document.querySelector("header nav");
    header.appendChild(newelement);
};