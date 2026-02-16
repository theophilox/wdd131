document.addEventListener("DOMContentLoaded", function () {
    const senderName = localStorage.getItem("userName");

    if (senderName) {
        document.getElementById("reviewDisplay").textContent =
            "Thank for sending a message " + senderName + "!";
    }
});

const hamburgerButton = document.querySelector("#menu");
const navigation = document.querySelector("nav ul");

hamburgerButton.addEventListener("click", () => {
	navigation.classList.toggle("show");
	hamburgerButton.classList.toggle("show");
});

const currentYear = document.querySelector("#currentYear")

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = document.lastModified;