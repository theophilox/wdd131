const senderName = localStorage.getItem('senderName');

if (senderName) {
    
    document.getElementById("reviewDisplay").textContent = "Thank for sending a message " + senderName + "!"; 

    }