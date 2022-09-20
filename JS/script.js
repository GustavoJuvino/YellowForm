
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