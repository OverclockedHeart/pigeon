import { loadPigeonAppFromLocalStorage, savePigeonAppToLocalStorage } from "../utils/serialize.js";
import { renderPosts } from "../utils/render_posts.js";

document.addEventListener("DOMContentLoaded", function(){
  const app = loadPigeonAppFromLocalStorage();
  const user = app.getLoggedUser();
  const postForm = document.getElementById("postForm");
  const postList = document.getElementById("postList");

  try {
    postForm.addEventListener("submit", function(event){
      event.preventDefault();

      let postTitle = document.getElementById("postTitle").value;
      let postContent = document.getElementById("postContent").value;
      let userID = user.id;

      app.addPost(postTitle, postContent, userID);
      savePigeonAppToLocalStorage(app);
      renderPosts(app, postList);
    })
  } catch (error){console.log("Error: postForm not found.")};

  savePigeonAppToLocalStorage(app);
  renderPosts(app, postList);
})