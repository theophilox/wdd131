document.getElementById("sendButton").addEventListener("click", function () {
    const senderName = document.getElementById("name").value;

    localStorage.setItem("userName", senderName); 
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