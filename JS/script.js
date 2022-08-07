
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
    l:{
        user: "Username or Email",
        pass: "Password",
        fPassword: "Haben Sie Ihr Passwort vergessen?",
        btn: "Einloggen",
        fRegister: "Sie haben kein bestehendes Konto?",
        span: "Gleich anmelden",
        lng: "DE/ GE", 

    },
}

const labels =  document.getElementsByTagName("label")


const testV = ["Userrr", "Passswoord","eng","bread","capuccino","cake"];

function logTest(...p){
    const prpties = Array.from(document.querySelectorAll(p));
    const testL = [labels[0], labels[1]];

    testL.concat(prpties).forEach((t) => t.innerText = testV.shift());
}



en.addEventListener("click", () => logTest(".p-initials", ".p-register", ".f-password", ".btn","[data-span='register']"))



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

const loginInputs = [allInputs[0], allInputs[1]];

function checkingInput(){
    // Loading Icon
    loading.classList.add("loading")
    loginBtn.classList.add("hidden-button")

    
    setTimeout(() => {
        loading.classList.remove("loading")
        loginBtn.classList.remove("hidden-button")

        // Add Error class
        const addI = (input) => input.classList.add("error");

        // Remove Error class
        const removeI = (input) => input.classList.remove("error");



        function input(t1, t2) {

            // Username or Email Input
            if(i[0].value === "" || i[0].value === " ") {
                i[0].nextElementSibling.classList.add("error-actived")
                i[1].nextElementSibling.classList.remove("error-actived")


                addI(i[0]);
                removeI(i[1]);

                e.innerText = i[0].setCustomValidity(t1);
                e.innerText = i[0].validationMessage;

            // // Password Input
            } else if(i[1].value === "" || i[1].value === " ") {
                i[1].nextElementSibling.classList.add("error-actived")
                i[0].nextElementSibling.classList.remove("error-actived")

                addI(i[1]);
                removeI(i[0]);

                i[1].nextElementSibling.innerText = i[1].setCustomValidity(t2);
                i[1].nextElementSibling.innerText = i[1].validationMessage;
            
            // // Succsess Message
            } else {
                e.classList.remove("error-actived")
                
                removeI(i[0]);
                removeI(i[1]);

                sucsess.classList.add("success-actived");
                loginBtn.classList.add("hidden-button")
            }
        }

        // English Error Messages
        if(i[0].hasAttribute('data-input')){
            input("! Enter your username or email", "! Enter your password");
        } 

        // Portuguese Error Messages
        if(i[0].classList.contains('pt')){ 
            input("! Preencha este campo", "! Entre com sua senha");
            sucsess.innerText = "Acessado :)";
        }

        // Portuguese Error Messages
        if(i[0].classList.contains('de')){
            input("! Füllen Sie dieses Feld aus", "! Passwort bitte");
            sucsess.innerText = "Zugegriffen :)";
        }

    }, 1400)
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

// Inputs from register form
const registerInp = [allInputs[2],allInputs[3],allInputs[4],allInputs[5],allInputs[6]]

// Errors
const eReg = document.querySelectorAll("[data-error='register']");

// Add Error
function addError(inp){
    // inp.nextElementSibling.classList.add("error-actived");
    inp.nextElementSibling.innerText = validationMessage;
}


function inputErrors(index){
    const removeError = registerInp.forEach((i) => i.nextElementSibling.classList.remove("error-actived"));


    if(registerInp[index].value === ""){
        registerInp[index].nextElementSibling.classList.add("error-actived");
    } else {
        removeError;
    }

    const domins = ["gmail","outlook"];
    
    const emails = {
        1: `@${domins[0]}.com`,
        2: `@${domins[1]}.com`,
    }

    const checkEmail = registerInp[1].value;

    if(checkEmail.indexOf("#")== -1){
        registerInp[1].nextElementSibling.classList.add("error-actived");
        registerInp[1].nextElementSibling.innerText = registerInp[1].validationMessage
    
    }
    else{
        console.log("sucsesss g")
    }


    if(checkEmail.indexOf("@") == -1){
        console.log("errorrr arroba");
    } else {
        console.log("sucsesss")
    }


    // if(registerInp[1].value.indexOf("@" && "gmail") !== -1){
    //     console.log("yes contain");
    // } else {
    //     console.log("Nop")
    // }


}


registerInp.forEach((input, index) => {
    input.addEventListener("change", () => inputErrors(index))
})

console.log(registerInp[1].validationMessage)


