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


// Importing portuguese methods and errors messages from languages.js
import {errors} from "../register.js";
import {errorsMsg} from "./languages.js";

// End Page Language method:
import {endLanguage} from "../end-page.js"

var userLang = navigator.language || navigator.userLanguage;
if(userLang === "pt" || userLang === "pt-BR") storageBR();


pt.addEventListener("click", () => storageBR());

function storageBR(){
    // Change the language page into Portuguese.
    LoginBR.login();
    RegisterBR.register();
    endLanguage("Conta criada com sucesso", "Agradeçemos por se juntar ao nosso time :)",
    "Clique aqui", "para retornar a página de login");

    // Change the error language in Login / Register Form.
    errors.changeRegister(errorsMsg.pt),
    errors.changeLogin(errorsMsg.pt.i1)
}

