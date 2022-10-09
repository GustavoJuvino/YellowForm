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

class errorsRegister{
    constructor(){ inputsR.forEach((label, index) => label.addEventListener("change", () => this.checkInputs(index))) };

    // Checking if the inputs are true or not.
    checkInputs = (index) => !inputsR[index].checkValidity() ? this.addError(index) : this.removeError(index);

    // Add error msg
    addError = (index) => {
        inputsR[index].nextElementSibling.classList.add("error-actived"),
        inputsR[index].classList.remove("true");
    } 

    // Remove the error msg.
    removeError = (index) =>  inputsR[index].nextElementSibling.classList.remove("error-actived");
    
    // This method will show the error message to the user in the Register Form. We can also set other language error messages.
    changeRegister(value){
        // Transform an object into an array.
        const languages = Object.values(value);
        inputsR.forEach((input) => input.nextElementSibling.innerText = languages.shift());
    }

    // It will show the error message to the user in the Login Form. We can also set other language error messages.
    changeLogin = (value) => inputsL.forEach((input) => input.nextElementSibling.innerText = value);
    
}

export const errors = new errorsRegister();

// Checking inputs: Phone Number, Password, Check Password
class Check{
    constructor(){
        this.phone = allInputs[4];
        this.password = allInputs[5];
        this.confirmPass = allInputs[6];
    }

    // Check if the phone number have at least 11 numbers.
    checkPhoneNumber(){ this.phone.value.length < 11 ? errors.addError(2) : (errors.removeError(2), this.success(this.phone)) };

    // Check Password Input
    checkPassword(){
        if(this.password.value.search(/(?=.*\d)(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[-!$%^&@#?]{1})([\w{7}])/) === -1){
            errors.addError(3);
        } else {
            errors.removeError(3);
            this.success(this.password);
        }
    }

    // Check if both passwords has the same value, if not it will show an error message.
    checkConfirmPass(){
        this.confirmPass.value !== this.password.value ? errors.addError(4) :
         (errors.removeError(4), this.success(this.confirmPass));
    }

    // Active green borders
    success(input){ input.classList.add("true") };
}

const checking = new Check();

// Check Phone Number
allInputs[4].addEventListener("change", () => checking.checkPhoneNumber())

// Check Password Input
allInputs[5].addEventListener("change", () => checking.checkPassword());

//Check confirm password.
allInputs[6].addEventListener("change", () => checking.checkConfirmPass());


// Final Button |  It will check if the inputs from Register form are true or not.
const btn2 = document.querySelector("[data-btn='2']");

btn2.addEventListener("click", () => {
    inputsR.forEach((i) => {
        if(!i.checkValidity()){
            i.nextElementSibling.classList.add("error-actived");
        } else {
            i.nextElementSibling.classList.remove("error-actived"),
            i.classList.add("true")
        }
    })
})


// Applying English Language in Register Form.
import {errorsMsg} from "./Languages/languages.js";

// Language page will be English if the browser's language is English or
// if the user clicks on the language menu to set another language.
var userLang = navigator.language || navigator.userLanguage;
if(userLang === "en") storage();

en.addEventListener("click", () => storage());

// Methods Storage
function storage(){ 
    // Changing the language in Register Form into ENGLISH
    registerLanguage("[data-h1]", "[data-btn='2']", ".p-signIN", "[data-span='login']"),

    // Change the error language in Login / Register Form.
    errors.changeRegister(errorsMsg.en),
    errors.changeLogin(errorsMsg.en.i1)
}



