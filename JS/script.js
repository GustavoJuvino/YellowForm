
// Login And Register Navigation
class Selecting{
    // Register, Login , Section Login, Section Register
    constructor(r, l, sl, sr){
        // Sections
        this.s1 = document.querySelector(sl);
        this.s2 = document.querySelector(sr);

        // Login and Register
        this.login = document.querySelector(r);
        this.register = document.querySelector(l);

    }

    addLogin(){ 
        this.s1.classList.add("login-activated")
        this.s2.classList.remove("register-activated");
     }

     addRegister(){ 
        this.s2.classList.add("register-activated")
        this.s1.classList.remove("login-activated");
     }

    // Activate 1 = Activate Login Form | Activate 2 = Activate Register Form
    activate1(){ this.register.addEventListener("click", () => this.addLogin()) };
    activate2(){ this.login.addEventListener("click", () => this.addRegister()) };
}

const selecting = new Selecting("[data-span='register']", "[data-span='login']", "[data-login]", "[data-register]");
selecting.activate1();
selecting.activate2();


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

const labels =  document.getElementsByTagName("label")

// English
const enUK = {
    // Login
    user: "Username or Email",
    pass: "Password",
    lng: "EN/ UK", 
    fPassword: "Forgot your password?",
    btn: "Sign In",
    fRegister: "Don't have an existing account?",
    span: "Register right now!",
}

// Changing Login Language page in ENGLISH/UK
function engLogin(...p){
    const lgnLabels = [labels[0], labels[1]];
    const tags = Array.from(document.querySelectorAll(p));
    const arrUK = Object.values(enUK)

    // L = Languages
    const activeEN = (l1, l2, l3) => {
        tags[0].classList.add(l1);
        tags[0].classList.remove(l2, l3);
    };

    activeEN("EN", "PT", "DE");

    // Changing the language page
    lgnLabels.concat(tags).forEach((t) => t.innerText = arrUK.shift());
}

// Hidden / Show Button -> Passwords
const allInputs = document.querySelectorAll("input");
const hidden = document.querySelectorAll(".hidden");
let state = false;

// Checking if the state are true or not, so then it will change the input type to text or to password.
const checkHidden = (hide, input) => hide.addEventListener("click", () => 
    state ? changeHidden(input, false, "password"): changeHidden(input, true, "text"));

// Changing the input type.
function changeHidden(input, value, character){
    input.setAttribute("type", character);
    state = value;
}

checkHidden(hidden[0], allInputs[1]);
checkHidden(hidden[1], allInputs[5]);
checkHidden(hidden[2], allInputs[6]);


// Checking inputs in login form
const loginBtn = document.querySelector("[data-btn='1']");

class CheckInp{
    constructor(...t){
        this.tags = document.querySelectorAll(t);
        this.inputs = [allInputs[0], allInputs[1]];
    }   

    add(tag, value) { tag.classList.add(value) };
    remove(tag, value){ tag.classList.remove(value) };

    checkingInput(){
        // Loading Requisition
        this.add(this.tags[0], "loading")
        this.add(loginBtn, "hidden-button")

        setTimeout(() => {
            // Stop Requisition
            this.remove(this.tags[0], "loading")
            this.remove(loginBtn, "hidden-button")


            // Check if both inputs are true, if not, it wil return an error.
            this.inputs.forEach((i) => {
                !i.checkValidity() ? i.nextElementSibling.classList.add("error-actived")
                    : i.nextElementSibling.classList.remove("error-actived");
            })

        }, 1000)
    }
}

const checkInpt = new CheckInp("[data-loading]", "[data-success]");
loginBtn.addEventListener("click", () => checkInpt.checkingInput())

// Register Form
const rgstUK = {
    // Register EN/UK
    user: "Username",
    email: "E-mail",
    number: "Phone Number",
    pass: "Password",
    cpass: "Confirm Password",
    h1: "Create an Account",
    btn: "Register!",
    fLogin: "Already have an existing account?",
    spanLogin: "Login here!",
}

function registerLanguage(...p){
    // Tags and labels from Register Form
    const tags = Array.from(document.querySelectorAll(p));
    let Rlabels = Array.from(labels).slice(2);
    const arrUK = Object.values(rgstUK);

    Rlabels.concat(tags).forEach((t) => t.innerText = arrUK.shift());
    allInputs[4].placeholder = "(XXX) XXXX XXXX";
}


// Errors in REGISTER FORM.
const dataError = document.querySelectorAll("[data-error='register']");

// Inputs from REGISTER FORM.
const inputsR = Array.from(allInputs).slice(2);

// Inputs from LOGIN FORM.
const inputsL = Array.from(allInputs).slice(0, 2);

import {errorsMsg} from "./languages.js";

class Errors{
    constructor(){ inputsR.forEach((label, index) => label.addEventListener("change", () => this.checkInputs(index))) };

    // Checking if the inputs are true or not.
    checkInputs = (index) => !inputsR[index].checkValidity() ? this.addError(index) : this.removeError();

    // Add error msg
    addError = (index) => inputsR[index].nextElementSibling.classList.add("error-actived");

    // Remove the error msg.
    removeError = () =>  dataError.forEach((error) => error.classList.remove("error-actived"));

    // This method changes the language of errors depending on which language is on the page.
    changeL(value){
        const languages = Object.values(value);
        inputsR.forEach((input) => input.nextElementSibling.innerText = languages.shift());
    }

    // This method will change the language of error message in Login Form.
    changeLogin = (value) => inputsL.forEach((input) => input.nextElementSibling.innerText = value);
    
}

export const errorsRegister = new Errors();

// Language page will be English if the browser's language is English.
var userLang = navigator.language || navigator.userLanguage;
if(userLang === "en") {
    errorsRegister.languagesTest(errorsMsg.en),
    errorsRegister.changeLogin(errorsMsg.en.i1);
    changeErrorLang("EN", errorPassword.en);
}

// Checking password input from Register Form.
const initials = document.querySelector("[data-initials]");

// Password Input
const pswrd = allInputs[5]

import {errorPassword} from "./languages.js";

// Change the error language.
let errorMsg = "";

// Change the error language in password input.
export function changeErrorLang(language, text){ if(initials.classList.contains(language)) errorMsg = text; }

// Check if the password input are true or not according to the regex.
function checkPassword(){
    if(pswrd.value.search(/(?=.*\d)(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[-!$%^&@#?]{1})([\w{7}])/) === -1){
        pswrd.nextElementSibling.classList.add("error-actived")
        pswrd.nextElementSibling.innerText = errorMsg;
    } else {
        return true;
    }
}

pswrd.addEventListener("change", () => checkPassword());

// This event change the login/register page in English
// and also active the Class that check if the inputs are true or not.
en.addEventListener("click", () => {
    engLogin("[data-initials]", ".f-password", ".btn",".p-register","[data-span='register']"),
    registerLanguage("[data-h1]", "[data-btn='2']", ".p-signIN", "[data-span='login']"),
    errorsRegister.changeL(errorsMsg.en),
    errorsRegister.changeLogin(errorsMsg.en.i1)
    changeErrorLang("EN", errorPassword.en);
});

// function english(){

// }

// Confirm Password
const confirmP = allInputs[6];

function checkError(){
    eReg[4].classList.add("error-actived");

    if(initals.classList.contains("PT")) eReg[4].innerText = errorsMsg.pt.i5;
    if(initals.classList.contains("EN")) eReg[4].innerText = errorsMsg.en.i5;
    if(initals.classList.contains("DE")) eReg[4].innerText = errorsMsg.de.i5;

}

const checkConfirmP = () => confirmP.value == pswrd.value ? true : checkError();

confirmP.addEventListener("change", () => checkConfirmP());
