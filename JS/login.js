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


// Checking inputs in login form
const allInputs = document.querySelectorAll("input");
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
                if(!i.checkValidity()){
                    i.nextElementSibling.classList.add("error-actived")
                } else {
                    i.nextElementSibling.classList.remove("error-actived"),
                    i.classList.add("true");
                }
            })

        }, 1000)
    }
}

const checkInpt = new CheckInp("[data-loading]", "[data-success]");

loginBtn.addEventListener("click", () => checkInpt.checkingInput())


// Methods Storage
en.addEventListener("click", () => storage());

// Here it's where the methods that change the language of the page are.
function storage(){
    // Changing Login Language page in ENGLISH/UK
    engLogin("[data-initials]", ".f-password", ".btn",".p-register","[data-span='register']")
}
