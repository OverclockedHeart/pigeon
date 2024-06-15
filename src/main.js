import { loadPigeonAppFromLocalStorage } from "../utils/serialize.js";
import { renderPosts } from "./dashboard.js";

const app = loadPigeonAppFromLocalStorage();
const postList = app.getPosts();

renderPosts(app, postList);