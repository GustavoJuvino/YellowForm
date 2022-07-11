
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

const selectlanguages = ["[data-en]", "[data-pt]", "[data-de]"];
const ptbr = document.querySelector(selectlanguages[1]);

function clickLanguagebr(){
    // Classes and Tags
    const loginBR = [".p-initials", ".f-password", ".btn", ".p-register"];
    const eBR = ["label", "span"];

    const labelBR = document.getElementsByTagName(eBR[0]);
    const spanBR = document.getElementsByTagName(eBR[1]);
    const classesBR = document.querySelectorAll(loginBR);
    
    // Login Form in PT-BR
    labelBR[0].innerText = ptBR.loginBR.user;
    labelBR[1].innerText = ptBR.loginBR.password;
    classesBR[0].innerText = ptBR.loginBR.lng;
    classesBR[1].innerText = ptBR.loginBR.fPassword;
    classesBR[2].innerText = ptBR.loginBR.btn;
    classesBR[3].innerText = ptBR.loginBR.fregister;
    spanBR[0].innerText = ptBR.loginBR.span;

    // Register Form in PT-BR
    // const  registerBR = [];

    console.log(labelBR[2])
    
}


ptbr.addEventListener("click", clickLanguagebr)



