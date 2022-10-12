import { selecting } from "./script.js";

const click_return = document.querySelector("[data-return]");
export const end_page = document.querySelector("#end-page");

click_return.addEventListener("click", () => {
    selecting.addLogin();
    end_page.style.display = "none";
});
