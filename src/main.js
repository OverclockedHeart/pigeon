import PigeonApp from "../controllers/app";

if (localStorage.getItem("app") === undefined) {
    const app = new PigeonApp;
    const stringified_app = JSON.stringify(app);

    localStorage.setItem("app", stringified_app);
} else {
    const stringified_app = localStorage.getItem("app");
    const app = JSON.parse(stringified_app);
}