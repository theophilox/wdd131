const currentYear = document.querySelector("#currentYear")

const lastModified = document.querySelector("#lastModified");

const today = new Date();

const reviewDisplay = document.querySelector("#reviewCount");

currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = document.lastModified;

let reviewCount = Number(localStorage.getItem("reviewCount-ls")) || 0;

if (reviewCount !== 0) {
    reviewDisplay.textContent = reviewCount + 1;
} else {
    reviewDisplay.textContent = "1";
}

reviewCount++;

localStorage.setItem("reviewCount-ls", reviewCount);

