const textarea = document.querySelector(".post-input");
const charCounter = document.querySelector(".char-counter");
const sendButton = document.querySelector(".send-btn");

textarea.addEventListener("input", () => {
const remaining = 140 - textarea.value.length;

if (remaining < 40 && remaining > 0) {
    charCounter.style.color = "rgb(255, 200, 0)";
    charCounter.textContent = remaining;
} else if (remaining <= 0) {
    charCounter.style.color = "rgb(255, 0, 0)";
    charCounter.textContent = remaining;
} else {
    charCounter.textContent = remaining > 0 ? remaining : "";
    charCounter.style.color = "black";
}

sendButton.disabled = textarea.value.length === 0 || remaining < 0;
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("tzeet-modal");
    const openModalBtn = document.getElementById("open-modal");
    const closeModalBtn = document.getElementById("close-modal");

    openModalBtn.addEventListener("click", () => {
        console.log("Abrindo modal...");
        modal.showModal();
    });

    closeModalBtn.addEventListener("click", () => {
        console.log("Fechando modal...");
        modal.close();
    });

    // Fechar modal ao clicar fora dele
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            console.log("Clicou fora do modal, fechando...");
            modal.close();
        }
    });
});

