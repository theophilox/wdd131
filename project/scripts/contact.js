document.getElementById("sendButton").addEventListener("click", function () {
    const senderName = document.getElementById("name").value;

    localStorage.setItem("userName", senderName); 
});