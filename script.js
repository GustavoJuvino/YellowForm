
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

// Activating Float Language-Menu
const arrowMenu = document.querySelector(".ArrowDown");
const floatMenu = document.querySelector("[data-menu]");
const teste = document.querySelector(".l-menu")

const flMenu = "floating-menu";


// Clicking Outside Floating Menu

arrowMenu.addEventListener("click", () => {
    floatMenu.classList.toggle(flMenu)
    outsideMenu();
})

// FIRST METHOD
function outsideMenu(){
    const html = document.documentElement;

    function outsideClick(){
        html.addEventListener("click", function removeMenu(element){
            if(!element.target.classList.contains("t") && !element.target.classList.contains("ArrowDown")){
                floatMenu.classList.remove(flMenu);
                html.removeEventListener("click", removeMenu);
            }
            console.log("click");
        })
    }
    outsideClick()

}

