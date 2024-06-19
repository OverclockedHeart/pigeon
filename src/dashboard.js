import { loadPigeonAppFromLocalStorage, savePigeonAppToLocalStorage } from "../utils/serialize.js";

document.addEventListener("DOMContentLoaded", function(){
  const app = loadPigeonAppFromLocalStorage();
  const user = app.getLoggedUser();
  const postForm = document.getElementById("postForm");

  try {
    postForm.addEventListener("submit", function(event){
      event.preventDefault();

      let postTitle = document.getElementById("postTitle").value;
      let postContent = document.getElementById("postContent").value;
      let userID = user.id;

      app.addPost(postTitle, postContent, userID);
      savePigeonAppToLocalStorage(app);
      renderPosts(app);
    })
  } catch (error){
    console.log("Error: postForm not found.")
  };

  savePigeonAppToLocalStorage(app);
  renderPosts(app);
})

export function renderPosts(app){
  let postList = document.getElementById("postList");

  try {
    postList.innerHTML = "";
  } catch (error){
    console.log("postList not found.");
  }
  
  let posts = app.getPosts();
  posts.forEach((post) => {
    let div = document.createElement("div");
    
    let title = document.createElement("h3");
    let body = document.createElement("p");
    title.innerText = post.title;
    title.id = "post_title";
    body.innerText = post.desc;
    body.id = "post_body";
    
    let author = document.createElement("p");
    author.innerText = post.author;
    author.className = "user_id";
    author.hidden = true;

    let id = document.createElement("p");
    id.innerText = post.id;
    id.className = "post_id";
    id.hidden = true;

    div.appendChild(title); //index 0
    div.appendChild(body); //index 1
    div.appendChild(author); //index 2
    div.appendChild(id); //index 3

    if (post.author === app.getLoggedUser().id){
      let deleteButton = document.createElement("button");
      deleteButton.id = "deletePostButton";
      deleteButton.innerText = "Elimina post";
  
      deleteButton.onclick = function(event){
        let post_id = event.currentTarget.parentNode.childNodes[3].innerText; //<p id=post_id hidden=true>post_id</p>
        app.removePost(post_id);

        savePigeonAppToLocalStorage(app);
        renderPosts(app);
      }

      div.appendChild(deleteButton);

      //------------------------------------------

      let editButton = document.createElement("button");
      editButton.id = "editPostButton";
      editButton.innerText = "Modifica post";

      editButton.onclick = function(event){
        let post_id = event.currentTarget.parentNode.childNodes[3].innerText; //<p id=post_id></p>.innerText

        let titleprompt = prompt("Inserisci il nuovo titolo:");
        let descprompt = prompt("Inserisci il nuovo contenuto del post:");
        
        if (descprompt != null || titleprompt != null){
          app.editPost(post_id, titleprompt, descprompt);
          savePigeonAppToLocalStorage(app);
          renderPosts(app);
        }
        else console.log("Edit cancelled.");
      }

      div.appendChild(editButton);
    }

    div.className = "post";
    postList.appendChild(div);
  })
}