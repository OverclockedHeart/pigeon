import { loadPigeonAppFromLocalStorage, savePigeonAppToLocalStorage } from "../utils/serialize.js";

const app = loadPigeonAppFromLocalStorage();
let userID = app.getLoggedUser().id;
  
if (!userID) {
  window.alert("Error: no user logged in. Redirecting to login...");
  window.location.href = "../page/login.html";
}

const postList = document.getElementById("posts");

function renderPosts(app, postList) {
  postList.innerHTML = "";
    
  let userPosts = app.getPosts();

  userPosts.forEach((post) => {
    let div = document.createElement("div");
    let title = document.createElement("h3");
    let body = document.createElement("p");

    title.innerText = post.title;
    body.innerText = post.desc;
    
    div.appendChild(title);
    div.appendChild(body);
    postList.appendChild(div);
  });
}

//---------------------------------

const newPostForm = document.getElementById("newPostForm");

newPostForm.addEventListener("submit", function(event){
  event.preventDefault();

  let postTitle = document.getElementById("postTitle").value;
  let postContent = document.getElementById("postContent").value;
  let userID = app.getLoggedUser().id;

  app.addPost(postTitle, postContent, userID);
  savePigeonAppToLocalStorage(app);
    
  renderPosts(app, postList);

  newPostForm.reset();
});

renderPosts(app, postList);
