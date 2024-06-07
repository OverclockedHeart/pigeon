import PigeonApp from "../controllers/app.js";

const imported_app = window.localStorage.getItem("app");

if (imported_app) {
    const app = Object.assign(new PigeonApp(), JSON.parse(imported_app));
    console.log(app);
} else {
    const app = JSON.stringify(new PigeonApp());
    window.localStorage.setItem("app", app);
    console.log("App missing. Creating new instance.");
};
