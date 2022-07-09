
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
import languagePt from "./languages.js";

const languages = ["[data-en]", "[data-pt]", "[data-de]"];

const ptbr = document.querySelector(languages[1]);


function clickLanguagePT(){

    const arrayPT = [".f-password", ".btn", ".f-register"];
    const elementsPT = ["label", "span", "p"];

    const labelPT = document.getElementsByTagName(elementsPT[0]);
    const paragraph = document.getElementsByTagName("p");
    const classesPT = document.querySelectorAll(arrayPT);

    // const spanPT = document.querySelector("[data-span='register']");
    // spanPT.innerText = languagePt.span;

    classesPT[0].innerText = languagePt.fPassword;
    classesPT[1].innerText = languagePt.btn;
    paragraph[6].innerHTML = languagePt.fregister;

}


ptbr.addEventListener("click", clickLanguagePT)
