const currentYear = document.querySelector("#currentYear")

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = document.lastModified;


const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
