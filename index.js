const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("loginBtn");
const loginErrorMsg = document.getElementById("login-error-msg");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const inputFieldCallback = (e) => {
    e.preventDefault();
    e.stopPropagation();
    loginErrorMsg.classList.remove(["show"]);
}

usernameInput.addEventListener("focus", inputFieldCallback);

passwordInput.addEventListener("focus", inputFieldCallback);

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const Username = e.target.username.value;
    const password = e.target.password.value;

    if (Username === "username" && password === "password") {
        alert("You have Successfully Logged in.");
        location.reload();
    } else {
        loginErrorMsg.classList.add(["show"]);

    }
})