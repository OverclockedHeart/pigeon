import PigeonApp from "../controllers/app.js";

const imported_app = localStorage.getItem("app");
window.alert("test 1 main");

if (imported_app) {
    let app = Object.assign(new PigeonApp(), JSON.parse(imported_app));
    window.alert(app);
} else {
    let app = new PigeonApp();
    app = JSON.stringify(app);
    window.alert("test 2.1 main");

    localStorage.setItem("app", app);
}
