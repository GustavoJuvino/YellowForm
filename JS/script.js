
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

// Changing Language page in ENGLISH/UK
function logTest(...p){
    const lgnLabels = [labels[0], labels[1]];
    const tags = Array.from(document.querySelectorAll(p));
    const arrUK = Object.values(enUK)

    tags[0].classList.add("EN");
    tags[0].classList.remove("PT");
    tags[0].classList.remove("DE");

    lgnLabels.concat(tags).forEach((t) => t.innerText = arrUK.shift());
}

en.addEventListener("click", () => 
logTest("[data-initials]", ".f-password", ".btn",".p-register","[data-span='register']"));



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
// Sign In button
const loginBtn = document.querySelector(".btn");
const loading = document.querySelector("[data-loading]");

 // Error Messages and Succsess messages
const e = document.querySelector("[data-error]");
const sucsess = document.querySelector("[data-success]");

// Login Inputs and Languages Initials
const lgnInputs = [allInputs[0], allInputs[1]];
const initals = document.querySelector("[data-initials]");

function checkingInput(){
    // Loading Icon
    loading.classList.add("loading")
    loginBtn.classList.add("hidden-button")

    setTimeout(() => {
        loading.classList.remove("loading")
        loginBtn.classList.remove("hidden-button")

        function lgnError(inpt){
            inpt.nextElementSibling.classList.add("error-actived");
            inpt.nextElementSibling.innerText = inpt.validationMessage;
            sucsess.classList.remove("success-actived");

            if(initals.classList.contains("EN")){
                inpt.nextElementSibling.innerText = "Please fill out this field.";
            } 
            else if(initals.classList.contains("PT")) {
                inpt.nextElementSibling.innerText = "Campo Requerido";
            }
            else if(initals.classList.contains("DE")) {
                inpt.nextElementSibling.innerText = "Fülle dieses Feld aus.";
            }
            else {
                return null;
            }
        }

        lgnInputs.forEach((inpt) => {

            // Checking if the inputs are true or not
            !inpt.checkValidity() ? lgnError(inpt) : inpt.nextElementSibling.classList.remove("error-actived");

            // If both of the inputs are true, then show sucsess message
            lgnInputs[0].checkValidity() && lgnInputs[1].checkValidity() ? 
            sucsess.classList.add("success-actived") : null
        });

    }, 1000)
}

loginBtn.addEventListener("click", () => checkingInput())





// Register Form --------
const regL = Array.from(labels);

const newLabels = regL.shift(regL[0]) && regL.shift(regL[1]);

const regInpt = Array.from(allInputs);

const newInputs = regInpt.shift(regInpt[0]) && regInpt.shift(regInpt[1]);

const rgstUK = {
    // Register
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

function regTest(...p){
    const tags = Array.from(document.querySelectorAll(p));
    const arrUK = Object.values(rgstUK);

    regL.concat(tags).forEach((t) => t.innerText = arrUK.shift());
    allInputs[4].placeholder = "(XXX) XXXX XXXX"
}

en.addEventListener("click", () => regTest("[data-h1]", "[data-btn='2']", ".p-signIN", "[data-span='login']"));


////////////////////////////////
// REGISTER INPUT/LABEL ERRORS

const eReg = document.querySelectorAll("[data-error='register']");

import {errorsMsg} from "./languages.js";

function inputErrors(index){
    // Remove Errors
    eReg.forEach((error) => error.classList.remove("error-actived"));

    function regError(index){
        regInpt[index].nextElementSibling.classList.add("error-actived")
        regInpt[index].nextElementSibling.innerText = regInpt[index].validationMessage;

        // Testing
        // regInpt[index].nextElementSibling.innerText = "Please fill in this field.";
        const enErr = Object.values(errorsMsg.en);
        const ptErr = Object.values(errorsMsg.pt);
        const deErr = Object.values(errorsMsg.de);

        if(initals.classList.contains("EN")) regInpt.forEach((input) => input.nextElementSibling.innerText = enErr.shift())
        if(initals.classList.contains("PT")) regInpt.forEach((input) => input.nextElementSibling.innerText = ptErr.shift())
        if(initals.classList.contains("DE")) regInpt.forEach((input) => input.nextElementSibling.innerText = deErr.shift())
    }

    !regInpt[index].checkValidity() ? regError(index) : null;



    // Formating Phone Numbers
    const phoneNmb = allInputs[4];

    function phoneCountry(){
        if(initals.classList.contains("PT")) checkPhoneBR();
        if(initals.classList.contains("EN")) checkPhoneEN();
        if(initals.classList.contains("DE")) checkPhoneDE();
    }

    // Checking if the phone number is true or not
    function checkPhoneBR(){
        if(phoneNmb.value.length < 13){
            eReg[2].classList.add("error-actived");
            allInputs[4].nextElementSibling.innerText = "Preencha com um número de telefone válido.";
        } 
        else {
            replaceNumber(phoneNmb.value);
            eReg[2].classList.remove("error-actived");
        }
    }
    
    function checkPhoneEN(){
        if(phoneNmb.value.length < 11){
            eReg[2].classList.add("error-actived");
            allInputs[4].nextElementSibling.innerText = "Please fill in a valid password.";
        } else {
            replaceEN(phoneNmb.value);
            eReg[2].classList.remove("error-actived");
        }
    }

    function checkPhoneDE(){
        if(phoneNmb.value.length < 12 ){
            eReg[2].classList.add("error-actived");
            allInputs[4].nextElementSibling.innerText = "Bitte geben Sie eine gültige Telefonnummer ein.";
        } else {
            replaceDE(phoneNmb.value);
            eReg[2].classList.remove("error-actived");
        }
    }

    // Replacing the old nubmber into a new one but formated.
    function replaceNumber(n){
        // Number from Brazil
        const clean = n.toString().replace(/\D/g, '');
        const newNumber = clean.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/g, "+$1 ($2) $3-$4");
        return phoneNmb.value = newNumber;
    }

    function replaceEN(n){
        //020 4968 0956  Number from London - UK
        const clean = n.toString().replace(/\D/g, '');
        const newNumber = clean.replace(/(\d{3})(\d{4})(\d{4})/g, "($1) $2 $3");
        return phoneNmb.value = newNumber;
    }

    function replaceDE(n){
        //+49 231 9831068  Number from German
        const clean = n.toString().replace(/\D/g, '');
        const newNumber = clean.replace(/(\d{2})(\d{3})(\d{7})/g, "+$1 $2 $3");
        return phoneNmb.value = newNumber;
    }

    phoneNmb.addEventListener("change", () => phoneCountry());
}

regInpt.forEach((label, index) => label.addEventListener("change", () => inputErrors(index)));


// Checking password input
// Não deve conter espaços
const pswrd = allInputs[5]

// (WARNING) Put this on the top of the script
var userLang = navigator.language || navigator.userLanguage;

function checkPswrd(){
    // Should contain at least number, one lower case, one upper case.
    let errorMSG = "";
    if(initals.classList.contains("PT")) errorMSG = "A senha deve conter pelo menos 8 caracteres e uma letra maiúscula, uma minúscula e um símbolo #?@"
    if(initals.classList.contains("EN")) errorMSG = "The password must contain at least 8 characters and an uppercase letter, a lowercase letter and an symbol $-!"
    if(initals.classList.contains("DE")) errorMSG = "Geben Sie ein Passwort mit 8 Zeichen ein, das 1 Großbuchstaben, 1 Kleinbuchstaben und 1 Symbol enthält ^@&";


    if(pswrd.value.search(/(?=.*\d)(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[-!$%^&@#?]{1})([\w{7}])/) === -1){
        pswrd.nextElementSibling.classList.add("error-actived")
        pswrd.nextElementSibling.innerText = errorMSG;
    } else {
        return true;
    }
}

pswrd.addEventListener("change", () => checkPswrd());


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
