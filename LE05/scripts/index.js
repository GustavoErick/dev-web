const textareaHome = document.querySelector(".post-container .post-input");
const charCounterHome = document.querySelector(".post-container .char-counter");
const sendButtonHome = document.querySelector(".post-container .send-btn");

const modal = document.getElementById("tzeet-modal");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");

const textareaModal = modal.querySelector(".post-input");
const charCounterModal = modal.querySelector(".char-counter");
const sendButtonModal = modal.querySelector(".send-btn");

const MAX_CHARACTERS = 140;

function updateCharCounter(textarea, counter, button) {
    const remaining = MAX_CHARACTERS - textarea.value.length;

    if (remaining < 40 && remaining > 0) {
        counter.style.color = "rgb(255, 200, 0)"; 
    } else if (remaining <= 0) {
        counter.style.color = "rgb(255, 0, 0)"; 
    } else {
        counter.style.color = "black"; 
    }

    counter.textContent = remaining;
    button.disabled = textarea.value.length === 0 || remaining < 0; 
}

textareaHome.addEventListener("input", () => {
    updateCharCounter(textareaHome, charCounterHome, sendButtonHome);
});

textareaModal.addEventListener("input", () => {
    updateCharCounter(textareaModal, charCounterModal, sendButtonModal);
});

openModalBtn.addEventListener("click", () => {
    modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});