
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
function outsideMenu(){
    const html = document.documentElement;
    html.addEventListener("click", function clickCheck(e) {

        // Check if the target was on the arrow or was inside the menu.
        if(!e.target.classList.contains("l") && !e.target.classList.contains("ArrowDown")){
            floatMenu.classList.remove(flMenu);

        // Remove the click event at the end.
            html.removeEventListener("click", clickCheck);
        }
    })
}

// Active the floating menu and the OutsideMenu
arrowMenu.addEventListener("click", () => {
    floatMenu.classList.toggle(flMenu)
    outsideMenu();
})


// Changing the language page
const languages = ["[data-en]", "[data-pt]", "[data-de]"];

const en =  document.querySelector(languages[0]);
const pt = document.querySelector(languages[1]);
const de = document.querySelector(languages[2]);

// Default page = English language
en.addEventListener("click",() => window.location.reload() );


// (Portuguese - Brazil)
import {ptBR} from "./languages.js";

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


// (German - Deutschland)
import {deGE} from "./languages.js";

function changeLanguageDE(){

    // German Login Form
    function loginDE(...c){

        // German Login Form
        const classes = document.querySelectorAll(c);
        classes[0].innerText = deGE.login.lng;
        classes[1].innerText = deGE.login.fPassword;
        classes[2].innerText = deGE.login.btn;
        classes[3].innerText = deGE.login.fRegister;
        classes[4].innerText = deGE.login.span;

        const labelDE = document.getElementsByTagName("label")
        labelDE[0].innerText = deGE.login.user;
        labelDE[1].innerText = deGE.login.password;
    }

    loginDE(".p-initials", ".f-password", ".btn", ".p-register", "[data-span='register']");


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

    // German Phone Number style
    allInputs[4].placeholder = "+ XX XXX XXXXXX";
}

de.addEventListener("click", changeLanguageDE);


// Hidden / Show Button -> Passwords

const hidden = document.querySelectorAll(".hidden");
const allInputs = document.querySelectorAll("input");
const i = [allInputs[0], allInputs[1], allInputs[5] ,allInputs[6]]


var state = false;

hidden[0].addEventListener("click", () => {
    if(state) {
        i[1].setAttribute("type", "password");
        state = false;
    }
    else{
        i[1].setAttribute("type", "text")
        state = true;
    }
})

hidden[1].addEventListener("click", () => {
    if(state) {
        i[2].setAttribute("type", "password");
        state = false;
    }
    else{
        i[2].setAttribute("type", "text")
        state = true;
    }
})

hidden[2].addEventListener("click", () => {
    if(state) {
        i[3].setAttribute("type", "password");
        state = false;
    }
    else{
        i[3].setAttribute("type", "text")
        state = true;
    }
})


// Checking inputs in login form
// Sign In button
const loginBtn = document.querySelector(".btn");
const loading = document.querySelector("[data-loading]");

function checkingInput(){
    loading.classList.add("loading")
    loginBtn.classList.add("hidden-button")

    
    setTimeout(() => {
        loading.classList.remove("loading")
        loginBtn.classList.remove("hidden-button")
        
        // Error Messages and Succsess messages
        const errors = ["[data-error='1']", "[data-error='2']"];
        const e = document.querySelectorAll(errors);
        const sucsess = document.querySelector("[data-success]");

        function input(t1, t2) {

            // Username or Email Input
            if(i[0].value === "") {
                e[0].classList.add("error-actived");
                e[1].classList.remove("error-actived");

                e[0].innerText = i[0].setCustomValidity(t1);
                e[0].innerText = i[0].validationMessage;

            // Password Input
            } else if(i[1].value === "") {
                e[1].classList.add("error-actived");
                e[0].classList.remove("error-actived")

                e[1].innerText = i[1].setCustomValidity(t2);
                e[1].innerText = i[1].validationMessage;
            
            // Succsess Message
            } else {
                e[1].classList.remove("error-actived");
                e[0].classList.remove("error-actived")

                sucsess.classList.add("success-actived");
                loginBtn.classList.add("hidden-button")
            }
        }

        // English Error Messages
        if(i[0].classList.contains('input-EN')){
            input("Enter your username or email", "Enter your password");
        } 

        // Portuguese Error Messages
        if(i[0].classList.contains('pt')){ 
            input("Preencha este campo", "Entre com sua senha");
            sucsess.innerText = "Acessado :)";
        }

        // Portuguese Error Messages
        if(i[0].classList.contains('de')){
            input("Füllen Sie dieses Feld aus", "Passwort bitte");
            sucsess.innerText = "Zugegriffen :)";
        }

    }, 1400)
}
 
loginBtn.addEventListener("click", () => checkingInput())


// Register Form