// Register Form
const allInputs = document.querySelectorAll("input");
const labels =  document.getElementsByTagName("label")

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

// Changing the language in Register Form into ENGLISH
const languages = ["[data-en]", "[data-pt]", "[data-de]"];
const en =  document.querySelector(languages[0]);

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

class Errors{
    constructor(){ inputsR.forEach((label, index) => label.addEventListener("change", () => this.checkInputs(index))) };

    // Checking if the inputs are true or not.
    checkInputs = (index) => !inputsR[index].checkValidity() ? this.addError(index) : this.removeError();

    // Add error msg
    addError = (index) => inputsR[index].nextElementSibling.classList.add("error-actived");

    // Remove the error msg.
    removeError = () =>  dataError.forEach((error) => error.classList.remove("error-actived"));

    // This method changes the language of errors depending on which language is on the page.
    changeRegister(value){
        const languages = Object.values(value);
        inputsR.forEach((input) => input.nextElementSibling.innerText = languages.shift());
    }

    // This method will change the language of error message in Login Form.
    changeLogin = (value) => inputsL.forEach((input) => input.nextElementSibling.innerText = value);
    
}

export const errorsRegister = new Errors();


// Checking password input from Register Form.
import {errorsMsg} from "./Languages/languages.js";
import {errorPassword} from "./Languages/languages.js";

const initials = document.querySelector("[data-initials]");

// Password Input
const pswrd = allInputs[5]


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

// Confirm Password
const confirmP = allInputs[6];
const errorCheckP = document.querySelectorAll("[data-error='register']");

function checkError(){
    errorCheckP[4].classList.add("error-actived");

    if(initials.classList.contains("PT")) errorCheckP[4].innerText = errorsMsg.pt.i5;
    if(initials.classList.contains("EN")) errorCheckP[4].innerText = errorsMsg.en.i5;
    if(initials.classList.contains("DE")) errorCheckP[4].innerText = errorsMsg.de.i5;

}

const checkConfirmP = () => confirmP.value == pswrd.value ? true : checkError();

confirmP.addEventListener("change", () => checkConfirmP());


// Methods Storage
en.addEventListener("click", () => storage());

// Here it's where the methods that change the language of the page are.
function storage(){
    // Changing the language in Register Form into ENGLISH
    registerLanguage("[data-h1]", "[data-btn='2']", ".p-signIN", "[data-span='login']"),

    // Change the error language in Login / Register Form.
    errorsRegister.changeRegister(errorsMsg.en),
    errorsRegister.changeLogin(errorsMsg.en.i1)
    changeErrorLang("EN", errorPassword.en);
}

// Language page will be English if the browser's language is English.
var userLang = navigator.language || navigator.userLanguage;
if(userLang === "en") {
    // Change the error language in Login / Register Form.
    errorsRegister.changeRegister(errorsMsg.en),
    errorsRegister.changeLogin(errorsMsg.en.i1);
    changeErrorLang("EN", errorPassword.en);
}