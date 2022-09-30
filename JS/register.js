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

console.log(inputsR)

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

    // This method will show the error message to the user in the Register Form. We can also set other language error messages.
    changeRegister(value){
        // Transform an object into an array.
        const languages = Object.values(value);
        inputsR.forEach((input) => input.nextElementSibling.innerText = languages.shift());
    }

    // It will show the error message to the user in the Login Form. We can also set other language error messages.
    changeLogin = (value) => inputsL.forEach((input) => input.nextElementSibling.innerText = value);
    
}

export const errorsRegister = new Errors();


// Check if the password input are true or not according to the regex.
// Password Input
const pswrd = allInputs[5]

function checkPassword(){
    if(pswrd.value.search(/(?=.*\d)(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[-!$%^&@#?]{1})([\w{7}])/) === -1){
        pswrd.nextElementSibling.classList.add("error-actived")
        errorsRegister.addError(3)
    }
}
pswrd.addEventListener("change", () => checkPassword());


//Check confirm password.
const confirmPassword = allInputs[6];

const checkConfirmPass = () => { 
    if(confirmPassword.value !== pswrd.value) {
        allInputs[6].nextElementSibling.classList.add("error-actived")
        errorsRegister.addError(4)
    } else {
        allInputs[6].nextElementSibling.classList.remove("error-actived")
    }
}

confirmPassword.addEventListener("change", () => checkConfirmPass());


// Check the phone number
let phone = allInputs[4];
function testNumber(error){
    let length = phone.value.length;
    if(length > 11){
        errorCheckP[2].classList.add("error-actived");
        errorCheckP[2].innerText = error;
    } else if (length < 11){
        errorCheckP[2].classList.add("error-actived");
        errorCheckP[2].innerText = error;
    } else{
        errorCheckP[2].classList.remove("error-actived");
    }
}

phone.addEventListener("change", () => testNumber("Por favor preencha um número com até 11 dígitos."))


// Checking password input from Register Form.
import {errorsMsg} from "./Languages/languages.js";
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
}