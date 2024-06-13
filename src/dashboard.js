import { loadPigeonAppFromLocalStorage, savePigeonAppToLocalStorage } from "../utils/serialize.js";

const app = loadPigeonAppFromLocalStorage();
const user = app.getLoggedUser();
  
if (!user) {
  window.alert("Error: no user logged in. Redirecting to login...");
  window.location.href = "../page/login.html";
}

const postList = document.getElementById("annunci");

function renderPosts() {
  postList.innerHTML = "";

  let posts = app.getPosts();
  posts.forEach((post) => {
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

const postForm = document.getElementById("postForm");

postForm.addEventListener("submit", function(event){
  event.preventDefault();

  let postTitle = document.getElementById("postTitle").value;
  let postContent = document.getElementById("postContent").value;
  let userID = user.id;

  app.addPost(postTitle, postContent, userID);
  savePigeonAppToLocalStorage(app);
    
  renderPosts(app, postList);
});

renderPosts(app, postList);
