const sectionLogin = document.querySelector("[data-login]");
const sectionRegister = document.querySelector("[data-register]");
const register = document.querySelector("[data-span='register']");
const login = document.querySelector("[data-span='login']");

console.log(login)

register.addEventListener("click", () =>{
    sectionRegister.classList.add("register-active");
    sectionLogin.classList.remove("login-active");
})

login.addEventListener("click", () =>{
    sectionLogin.classList.add("login-active");
    sectionRegister.classList.remove("register-active");
})