// (Portuguese - Brazil)
import {ptBR} from "./languages.js";

const languages = ["[data-en]", "[data-pt]", "[data-de]"];
const pt = document.querySelector(languages[1]);

const allInputs = document.querySelectorAll("input");
const i = [allInputs[0], allInputs[1]]

// Changing the language in Register Form into Portuguese - Brazil
function registerLanguageBR(...p){
    const properties = Array.from(document.querySelectorAll(p));
    const arrBR = Object.values(ptBR.login)
    const test = i.concat(properties);

    test.forEach((p) => console.log(p.innerText));
}


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
    // Changing Login Language page in Portuguese/Brazil
    registerLanguageBR("[data-initials]",".f-password",
    "[data-btn='1']", ".p-register", "[data-span='register']");

    // Change the error language in Login / Register Form.
    errorsRegister.changeRegister(errorsMsg.pt),
    errorsRegister.changeLogin(errorsMsg.pt.i1)
    changeErrorLang("PT", errorPassword.pt, errorsMsg.pt.i5);
}