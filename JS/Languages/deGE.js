// (German - Deutschland)
import {deGE} from "./languages.js";

const languages = ["[data-en]", "[data-pt]", "[data-de]"];
const de = document.querySelector(languages[2]);

const labels = Array.from(document.getElementsByTagName("label"));

// Changing the language in Login Form into German
class German{
    constructor(...tags){ this.tags = Array.from(document.querySelectorAll(tags)) };
    
    // Login Form
    login(){
        // Object into an array with the German translation.
        this.array = Object.values(deGE.login)
        this.tags.concat(labels[0],labels[1]).forEach((t) => t.innerText = this.array.shift())
    }

    // Register Form
    register(){
        // Object into an array with the German translation.
        this.array = Object.values(deGE.register)
        this.tags.concat(labels.slice(2)).forEach((t) => t.innerText = this.array.shift());
    }
}

const loginDE = new German("[data-initials]",".f-password","[data-btn='1']", ".p-register", "[data-span='register']");
const registerDE = new German("[data-h1]", "[data-btn='2']", ".p-signIN", "[data-span='login']");


// Importing german methods and errors messages from languages.js
import {errors} from "../register.js";
import {errorsMsg} from "./languages.js";

// End Page Language method:
import {endLanguage} from "../end-page.js"

// Navigator user language
var userLang = navigator.language || navigator.userLanguage;
if(userLang === "de") storageDE();

de.addEventListener("click", () => storageDE());

function storageDE(){
    // Change the language page into Portuguese.
    loginDE.login();
    registerDE.register();

    // Change the error language in Login / Register Form.
    errors.changeRegister(errorsMsg.de),
    errors.changeLogin(errorsMsg.de.i1)
}