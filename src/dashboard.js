import getUserByID from "../controllers/app.js";
import { loadPigeonAppFromLocalStorage, savePigeonAppToLocalStorage } from "../utils/serialize.js";

document.addEventListener("DOMContentLoaded", function(event){
  const app = loadPigeonAppFromLocalStorage();
  const user = app.getLoggedUser();
  const postForm = document.getElementById("postForm");
  
  postForm.addEventListener("submit", function(event){
    event.preventDefault();

    let postTitle = document.getElementById("postTitle").value;
    let postContent = document.getElementById("postContent").value;
    let userID = user.id;

    app.addPost(postTitle, postContent, userID);
    savePigeonAppToLocalStorage(app);
    
    renderPosts(app);
  })

  renderPosts(app);
})


export function renderPosts(app){
  let postList = document.getElementById("postList");
  postList.innerHTML = "";
  
  let posts = app.getPosts();
  posts.forEach((post) => {
    let div = document.createElement("div");
    
    let title = document.createElement("h3");
    let body = document.createElement("p");
    title.innerText = post.title;
    body.innerText = post.desc;
    
    let author = document.createElement("p");
    author.innerText = post.author;
    author.hidden = true;

    let id = document.createElement("p");
    id.innerText = post.id;
    id.hidden = true;
    
    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(id);
    div.appendChild(author);
    div.className = "post";
    postList.appendChild(div);
  })
}