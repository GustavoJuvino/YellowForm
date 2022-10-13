const click_return = document.querySelector("[data-return]");
export const end_page = document.querySelector("#end-page");

click_return.addEventListener("click", () => {
    end_page.style.display = "none";
    window.location.reload();
});

// Changing the language in end page:
const ArrayTags = ["[data-end='h1']","[data-end='h2']","[data-end='P']","[data-return]"];

export function endLanguage(...texts){
    // Tags from End Page
    const tags = Array.from(document.querySelectorAll(ArrayTags));
    tags.forEach((t) => t.innerText = texts.shift());
}

