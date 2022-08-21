
const languages = ["[data-en]", "[data-pt]", "[data-de]"];
const de = document.querySelector(languages[2]);

const allInputs = document.querySelectorAll("input");
const i = [allInputs[0], allInputs[1], allInputs[5] ,allInputs[6]]

// Navigator user language
var userLang = navigator.language || navigator.userLanguage; 
if(userLang === "de") changeLanguageDE();


// (German - Deutschland)
import {deGE} from "./languages.js";

function changeLanguageDE(){

    // German Login Form
    function loginDE(...c){

        // German Login Form
        const classes = document.querySelectorAll(c);
        classes[0].classList.add("DE");
        classes[0].classList.remove("EN");
        classes[0].classList.remove("PT");

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

de.addEventListener("click", changeLanguageDE);