function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let correctUsername = "admin";
    let correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
        document.getElementById("output").innerHTML = "Login Successful!";
        window.alert("Welcome, " + username + "!");
    } else {
        document.getElementById("output").innerHTML = "Invalid username or password";
    }
}

function toggleInstructions() {
    let instr = document.getElementById("instructions");
    if (instr.style.display === "none") {
        instr.style.display = "block";
    } else {
        instr.style.display = "none";
    }
}
