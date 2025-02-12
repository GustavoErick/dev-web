document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");
    const yearSelect = document.getElementById("year");
    const agreeTerms = document.getElementById("agree-terms");
    const signupBtn = document.getElementById("signup-btn");

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("senha-error");
    const confirmPasswordError = document.createElement("p"); // Criando elemento para erro da confirmação de senha
    confirmPasswordError.classList.add("error-message");
    confirmPasswordError.textContent = "As senhas não correspondem.";
    confirmPasswordInput.insertAdjacentElement("afterend", confirmPasswordError);
    confirmPasswordError.style.display = "none";

    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    function updateDays() {
        daySelect.innerHTML = '<option value="">Dia</option>';
        const month = parseInt(monthSelect.value);
        let daysInMonth = new Date(currentYear, month, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement("option");
            option.value = day;
            option.textContent = day;
            daySelect.appendChild(option);
        }
    }
    monthSelect.addEventListener("change", updateDays);

    function showError(input, messageElement, isValid) {
        if (isValid) {
            input.style.border = "1px solid #ccc";
            messageElement.style.display = "none";
        } else {
            input.style.border = "1px solid red";
            messageElement.style.display = "block";
        }
    }

    function validateForm() {
        const isNameValid = nameInput.value.trim().length > 0;
        const isEmailValid = /\S+@\S+\.\S+/.test(emailInput.value);
        const isPasswordValid = passwordInput.value.length >= 6;
        const isConfirmPasswordValid = passwordInput.value === confirmPasswordInput.value && passwordInput.value.length >= 6;
        const isDateValid = monthSelect.value !== "" && daySelect.value !== "" && yearSelect.value !== "";
        const isAgreed = agreeTerms.checked;

        showError(emailInput, emailError, isEmailValid);
        showError(passwordInput, passwordError, isPasswordValid);
        showError(confirmPasswordInput, confirmPasswordError, isConfirmPasswordValid);

        signupBtn.disabled = !(isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isDateValid && isAgreed);
    }

    document.querySelectorAll("input, select").forEach(element => {
        element.addEventListener("input", validateForm);
    });
});
