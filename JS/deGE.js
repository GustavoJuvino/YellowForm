
const languages = ["[data-en]", "[data-pt]", "[data-de]"];
const de = document.querySelector(languages[2]);

const allInputs = document.querySelectorAll("input");
const i = [allInputs[0], allInputs[1], allInputs[5] ,allInputs[6]]

// (German - Deutschland)
import {deGE} from "./languages.js";

function changeLanguageDE(){

    // German Login Form
    function loginDE(...c){

        // German Login Form
        const classes = document.querySelectorAll(c);

        const activeDE = (l1, l2, l3) => {
            classes[0].classList.add(l1);
            classes[0].classList.remove(l2, l3);
        };
    
        activeDE("DE", "EN", "PT");

        classes[0].innerText = deGE.login.lng;
        classes[1].innerText = deGE.login.fPassword;
        classes[2].innerText = deGE.login.btn;
        classes[3].innerText = deGE.login.fRegister;
        classes[4].innerText = deGE.login.span;

        const labelDE = document.getElementsByTagName("label")
        labelDE[0].innerText = deGE.login.user;
        labelDE[1].innerText = deGE.login.password;
    }

    loginDE("[data-initials]", ".f-password", ".btn", ".p-register", "[data-span='register']");


    // German Register Form
    function registerDE(...c){
        // Classes
        const classes = document.querySelectorAll(c);
        classes[1].innerText = deGE.register.btn;
        classes[2].innerText = deGE.register.fRegister;
        classes[3].innerText = deGE.register.span;

        // Tags
        const labelDE = document.getElementsByTagName("label");
        labelDE[2].innerText= deGE.register.user;
        labelDE[4].innerText= deGE.register.phone;
        labelDE[5].innerText= deGE.login.password;
        labelDE[6].innerText= deGE.register.cPassword;
        

        const h1 = document.getElementsByTagName("h1");
        h1[2].innerText = deGE.register.h1;

    }

    registerDE(".p-signIN","[data-span='login']", ".btn");

    // Added German language in input messages errors.
    i[0].classList.add("de")
    i[0].classList.remove('pt');

    // Germany (DORTMUND) Phone Number style
    allInputs[4].placeholder = "+49 231 XXXXXX";
}

// Importing methods which allow us to check if the inputs are true
// and importing german errors messages from languages.js
import {errorsRegister} from "./script.js";
import {errorsMsg} from "./languages.js";

// German Errors
import { errorPassword } from "./languages.js";
import{ changeErrorLang } from "./script.js";

// Navigator user language
// Here it's where the methods that change the language of the page are.
var userLang = navigator.language || navigator.userLanguage; 
if(userLang === "de") storageDE()

de.addEventListener("click", () => storageDE());

function storageDE(){
    // Changing Login Language page in Portuguese/Brazil
    changeLanguageDE(),

    // Change the error language in Login / Register Form.
    errorsRegister.changeRegister(errorsMsg.de);
    errorsRegister.changeLogin(errorsMsg.de.i1);
    changeErrorLang("DE", errorPassword.de );
}