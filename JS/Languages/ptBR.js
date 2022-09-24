// (Portuguese - Brazil)
import {ptBR} from "./languages.js";

const languages = ["[data-en]", "[data-pt]", "[data-de]"];
const pt = document.querySelector(languages[1]);

const labels = Array.from(document.getElementsByTagName("label"));

// Changing the language in Login Form into Portuguese - Brazil
class Portuguese{
    constructor(...tags){ this.tags = Array.from(document.querySelectorAll(tags)) };
    
    // Login Form
    login(){
        // Object into an array with the Portuguese translation.
        this.array = Object.values(ptBR.login)
        this.tags.concat(labels[0],labels[1]).forEach((t) => t.innerText = this.array.shift())
    }

    // Register Form
    register(){
        // Object into an array with the Portuguese translation.
        this.array = Object.values(ptBR.register)
        this.tags.concat(labels.slice(2)).forEach((t) => t.innerText = this.array.shift());
    }
}

const LoginBR = new Portuguese("[data-initials]",".f-password","[data-btn='1']", ".p-register", "[data-span='register']");
const RegisterBR = new Portuguese("[data-h1]", "[data-btn='2']", ".p-signIN", "[data-span='login']");

// Importing method which allow us to check if the inputs are true
// and importing portuguese errors messages from languages.js
import {errorsRegister} from "../register.js";
import {errorsMsg} from "./languages.js";

// Portuguese Errors
import { errorPassword } from "./languages.js";
import{ changeErrorLang } from "../register.js";

// Navigator user language
// Here it's where the methods that change the language of the page are.
var userLang = navigator.language || navigator.userLanguage;
if(userLang === "pt" || userLang === "pt-BR") storageBR();

pt.addEventListener("click", () => storageBR());

function storageBR(){
    // Change the language page into Portuguese.
    LoginBR.login();
    RegisterBR.register();

    // Change the error language in Login / Register Form.
    errorsRegister.changeRegister(errorsMsg.pt),
    errorsRegister.changeLogin(errorsMsg.pt.i1)
    changeErrorLang("PT", errorPassword.pt, errorsMsg.pt.i5);
}