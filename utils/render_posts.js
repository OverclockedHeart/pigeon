import { savePigeonAppToLocalStorage } from "../utils/serialize.js";

export function renderPosts(app, postList){
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
      body.innerText = post.desc;
      
      let author = document.createElement("p");
      author.innerText = post.author;
      author.className = "user_id";
      author.hidden = true;
  
      let id = document.createElement("p");
      id.innerText = post.id;
      id.className = "post_id";
      id.hidden = true;
  
      div.appendChild(title);
      div.appendChild(body);
      div.appendChild(author);
      div.appendChild(id);
        
      if (app.getLoggedUser() !== null && post.author === app.getLoggedUser().id){
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Elimina";
        deleteButton.onclick = function(event){
          let post_id = event.currentTarget.parentNode.childNodes;
          post_id = post_id[3].innerText; //post_id[3] = <p id=post_id> post_id </p>
          app.removePost(post_id);
          
          savePigeonAppToLocalStorage(app);
          renderPosts(app);
        }
  
        div.appendChild(deleteButton);
      }
  
      div.className = "post";
      postList.appendChild(div);
    })
}