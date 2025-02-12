document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-btn");
    const emailError = document.getElementById("email-error");

    function validateForm() {
        const emailValid = emailInput.value.includes("@") && emailInput.value.includes(".");
        const passwordValid = passwordInput.value.trim().length > 0;

        if (!emailValid && emailInput.value.length > 0) {
            emailInput.classList.add("input-error");
            emailError.style.display = "block";
        } else {
            emailInput.classList.remove("input-error");
            emailError.style.display = "none";
        }

        loginButton.disabled = !(emailValid && passwordValid);
    }

    emailInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);
});
