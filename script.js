let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let form = document.querySelector("form");
let eForm = document.querySelector("input");
let icon = document.querySelector(".error");
let msg = document.querySelector(".msg");

function validateEmail() {
    eForm.value.trim();
    if (eForm.value == "" || !eForm.value.match(emailRegex)) {
        icon.classList.add("show");
        msg.classList.add("show");
        form.style.borderColor = "var(--Soft-Red)";
        document.querySelector(".msg-done").classList.remove("show");
    }
    else {
        icon.classList.remove("show");
        msg.classList.remove("show");
        form.style.borderColor = "var(--Desaturated-Red)";
        document.querySelector(".msg-done").classList.add("show");
    }
}