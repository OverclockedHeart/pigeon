import { loadPigeonAppFromLocalStorage, savePigeonAppToLocalStorage } from "../utils/serialize.js";

function renderPosts(app, postList){
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

const app = loadPigeonAppFromLocalStorage();
const user = app.getLoggedUser();
const postList = document.getElementById("postList");
const postForm = document.getElementById("postForm");
  
if (!user) {
  window.alert("Error: no user logged in. Redirecting to login...");
  window.location.href = "../page/login.html";
}

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
