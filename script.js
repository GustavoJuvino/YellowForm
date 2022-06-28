const sectionLogin = document.querySelector("[data-login]");
const sectionRegister = document.querySelector("[data-register]");
const register = document.querySelector("[data-span='register']");

console.log(register)

register.addEventListener("click", () =>{
    sectionLogin.classList.add("section-active");
})