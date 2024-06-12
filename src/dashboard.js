import { loadPigeonAppFromLocalStorage, savePigeonAppToLocalStorage } from "../utils/serialize";

document.addEventListener("DOMContentLoaded", function () {
  let app = loadPigeonAppFromLocalStorage();
  let userID = app.returnLoggedUserID();
  
  if (!userID) {
    window.location.href = "../page/login.html";
  }

  const newPostForm = document.getElementById("newPostForm");
  const postList = document.getElementById("posts");

  function renderPosts(app) {
    postList.innerHTML = "";
    
    let userPosts = app.getPosts();

    userPosts.forEach((post) => {
      let li = document.createElement("li");
      li.textContent = `Titolo: ${post.title}, Contenuto: ${post.content}`;
      postList.appendChild(li);
    });
  }

  newPostForm.addEventListener("submit", function(event){
    event.preventDefault();

    let postTitle = document.getElementById("postTitle").value;
    let postContent = document.getElementById("postContent").value;

    app.addPost(postTitle, postContent, userID);
    savePigeonAppToLocalStorage(app);
    
    renderPosts();
    newPostForm.reset();
  });

  renderPosts();
});
