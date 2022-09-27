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

// Change the error language.
let errorPass = "";
let errorCheckPass = "";

// Password Input
const pswrd = allInputs[5]

// Change the error language in password input.
export const changeErrorLang = (language, text, text2) => {
    if(initials.classList.contains(language)) return errorPass = text, errorCheckPass = text2; 
}

// Check if the password input are true or not according to the regex.
function checkPassword(){
    if(pswrd.value.search(/(?=.*\d)(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[-!$%^&@#?]{1})([\w{7}])/) === -1){
        pswrd.nextElementSibling.classList.add("error-actived")
        pswrd.nextElementSibling.innerText = errorPass;
    }
}

pswrd.addEventListener("change", () => checkPassword());


//Check confirm password.
const errorCheckP = document.querySelectorAll("[data-error='register']");
const confirmPassword = allInputs[6];

const checkConfirmPass = () => { 
    if(confirmPassword.value !== pswrd.value) errorCheckP[4].classList.add("error-actived"),
    errorCheckP[4].innerText = errorCheckPass;
}

confirmPassword.addEventListener("change", () => checkConfirmPass());


en.addEventListener("click", () => storage());

// Language page will be English if the browser's language is English.
var userLang = navigator.language || navigator.userLanguage;
if(userLang === "en") {storage()}

// Methods Storage
function storage(){ 
    // Changing the language in Register Form into ENGLISH
    registerLanguage("[data-h1]", "[data-btn='2']", ".p-signIN", "[data-span='login']"),

    // Change the error language in Login / Register Form.
    errorsRegister.changeRegister(errorsMsg.en),
    errorsRegister.changeLogin(errorsMsg.en.i1)
    changeErrorLang("EN", errorPassword.en, errorsMsg.en.i5);
}