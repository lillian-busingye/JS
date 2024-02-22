const loginForm = document.getElementsByName("action_page.php");
const loginButton = document.getElementById("loginBtn");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const Username = loginForm.Username.value;
    const password = loginForm.password.value;

    if (Username === "uname" && password === "psw") {
        alert("You have Successfully Logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})