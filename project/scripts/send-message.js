document.addEventListener("DOMContentLoaded", function () {
    const senderName = localStorage.getItem("userName");

    if (senderName) {
        document.getElementById("reviewDisplay").textContent =
            "Thank for sending a message " + senderName + "!";
    }
});