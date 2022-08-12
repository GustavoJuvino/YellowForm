
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

const allInputs = document.querySelectorAll("input");
const i = [allInputs[0], allInputs[1], allInputs[5] ,allInputs[6]]

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

const labels =  document.getElementsByTagName("label")

// Changing Language page in ENGLISH/UK
function logTest(...p){
    console.log(p)
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
const hidden = document.querySelectorAll(".hidden");
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

// Error Messages
const eMsg = [
    "Enter with your username",
    "Enter with your email",
    "Enter a valid phone number",
    "Passwords do not match"
]

const regL = Array.from(labels);

const newLabels = regL.shift(regL[0]) && regL.shift(regL[1]);

const regInpt = Array.from(allInputs);
const newInputs = regInpt.shift(regInpt[0]) && regInpt.shift(regInpt[1]);

const rgstUK = {
    // Login
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

    // console.log( regL.concat(tags))

    regL.concat(tags).forEach((t) => t.innerText = arrUK.shift());
}

en.addEventListener("click", () => regTest("[data-h1]", "[data-btn='2']", ".p-signIN", "[data-span='login']"));



regInpt.forEach((label) => {
    label.addEventListener("change", () => console.log("test"))
})