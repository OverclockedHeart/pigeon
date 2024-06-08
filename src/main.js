import PigeonApp from "../controllers/app.js";

const app_string = window.localStorage.getItem("app");

if (app_string) {
    const app = Object.setPrototypeOf(JSON.parse(imported_app), PigeonApp.prototype);
} else {
    app = JSON.stringify(new PigeonApp());
    console.log("App missing. Creating new instance.");
    window.localStorage.setItem("app", app);
};

window.localStorage.setItem("app", app);