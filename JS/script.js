
// Login And Register Navigation

const sectionLogin = document.querySelector("[data-login]");
const sectionRegister = document.querySelector("[data-register]");

const register = document.querySelector("[data-span='register']");
const login = document.querySelector("[data-span='login']");

const m = ["register-active", "login-active"];

register.addEventListener("click", () =>{
    sectionRegister.classList.add(m[0]);
    sectionLogin.classList.remove(m[1]);
})

login.addEventListener("click", () =>{
    sectionLogin.classList.add(m[1]);
    sectionRegister.classList.remove(m[0]);
})

// Activating Floating Language-Menu
const arrowMenu = document.querySelector(".ArrowDown");
const floatMenu = document.querySelector("[data-menu]");
const flMenu = "floating-menu";


// Clicking Outside -- Floating Menu
arrowMenu.addEventListener("click", () => {
    // Active the floating menu
    floatMenu.classList.toggle(flMenu)
    outsideMenu();
})

function outsideMenu(){
    const html = document.documentElement;
    html.addEventListener("click", function clickCheck(e) {

        // Check if the target was on the arrow or  was inside the menu.
        if(!e.target.classList.contains("l") && !e.target.classList.contains("ArrowDown")){
            floatMenu.classList.remove(flMenu);

        // Remove the click event at the end.
            html.removeEventListener("click", clickCheck);
        }
    })
}



// Changing the Language Page (Portuguese - Brazil)
import {ptBR} from "./languages.js";

const languages = ["[data-en]", "[data-pt]", "[data-de]"];

const en =  document.querySelector(languages[0]);
const pt = document.querySelector(languages[1]);

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

    // Classes from Login form
    loginBR(".p-initials", ".f-password", ".btn", ".p-register", "[data-span='register']");


    // // Register Form in PT-BR
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
    // Classes from Register form
    registerBR(".p-signIN","[data-span='login']", ".btn")
}

pt.addEventListener("click", changeLanguageBR);
en.addEventListener("click", () => window.location.reload());
