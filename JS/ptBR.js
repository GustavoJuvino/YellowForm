// (Portuguese - Brazil)
import {ptBR} from "./languages.js";

const languages = ["[data-en]", "[data-pt]", "[data-de]"];
const pt = document.querySelector(languages[1]);

const allInputs = document.querySelectorAll("input");
const i = [allInputs[0], allInputs[1], allInputs[5] ,allInputs[6]]

var userLang = navigator.language || navigator.userLanguage; 
console.log("The language is: " + userLang);


if(userLang === "pt-BR"){
    changeLanguageBR()
} else{
    console.log("nao")
}

function changeLanguageBR(){

    // Login Form in PT-BR
    function loginBR(...c){
        const classes = document.querySelectorAll(c);
        classes[0].innerText = ptBR.login.lng;
        classes[1].innerText = ptBR.login.fPassword;
        classes[2].innerText = ptBR.login.btn;
        classes[3].innerText = ptBR.login.fregister;
        classes[4].innerText = ptBR.login.span;

        const labelBR = document.getElementsByTagName("label")
        labelBR[0].innerText = ptBR.login.user;
        labelBR[1].innerText = ptBR.login.password;
    }

    loginBR(".p-initials", ".f-password", ".btn", ".p-register", "[data-span='register']");


    // Register Form in PT-BR
    function registerBR(...c){
        const classes = document.querySelectorAll(c);
        classes[1].innerText = ptBR.register.btn;
        classes[2].innerText = ptBR.register.flogin;
        classes[3].innerText = ptBR.register.span;

        const labelBR = document.getElementsByTagName("label");
        labelBR[2].innerText= ptBR.register.user;
        labelBR[4].innerText= ptBR.register.phone;
        labelBR[5].innerText= ptBR.login.password;
        labelBR[6].innerText= ptBR.register.cpassword;

        const h1 = document.getElementsByTagName("h1");
        h1[2].innerText = ptBR.register.h1;
    }

    registerBR(".p-signIN","[data-span='login']", ".btn")

    // Added Portuguese language in input messages errors.
    i[0].classList.add("pt")
    i[0].classList.remove('de');

    // Brazil Phone Number style
    allInputs[4].placeholder = "+ XX XX XXXX-XXXX";
}

pt.addEventListener("click", changeLanguageBR);