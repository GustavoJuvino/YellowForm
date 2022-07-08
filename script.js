
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

const flMenu = "floating-menu";


// Clicking Outside Floating Menu

arrowMenu.addEventListener("click", () => {
    floatMenu.classList.toggle(flMenu)
    clickoutside()
})


function clickoutside(){
    document.onclick = (e) =>{
        if(e.target !== arrowMenu && e.target !== floatMenu){
            floatMenu.classList.remove(flMenu)
        }
    }
    
}

