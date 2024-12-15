const registerBtn = document.querySelector("#register");
const container = document.querySelector(".container");
const loginBtn = document.querySelector("#login");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
})

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
})