
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



// Changing the Language Page
import languageBR from "./languages.js";

const languages = ["[data-en]", "[data-pt]", "[data-de]"];

const ptbr = document.querySelector(languages[1]);


function clickLanguagebr(){

    const arrayBR = [".p-initials", ".f-password", ".btn", ".p-register"];
    const elementsBR = ["label", "span"];

    const labelBR = document.getElementsByTagName(elementsBR[0]);
    const spanBR = document.getElementsByTagName(elementsBR[1]);
    const classesBR = document.querySelectorAll(arrayBR);

    // Username and Password
    labelBR[0].innerText = languageBR.user;
    labelBR[1].innerText = languageBR.password;

    // Language initials / Form Password
    classesBR[0].innerText = languageBR.lng;
    classesBR[1].innerText = languageBR.fPassword;

    // Button
    classesBR[2].innerText = languageBR.btn;

    // Form Register
    classesBR[3].innerText = languageBR.fregister;

    // Span 
    spanBR[0].innerText = languageBR.span;

}


ptbr.addEventListener("click", clickLanguagebr)
