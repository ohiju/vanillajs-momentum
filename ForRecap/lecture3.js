const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form Input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    // const username = loginInput.value;
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden")

}

loginForm.addEventListener("submit", onLoginSubmit)