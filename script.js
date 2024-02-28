function showSignupForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function showLoginForm() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check credentials (dummy check, replace with actual authentication)
    if (username === "user" && password === "pass") {
        alert("Login successful!");
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function signup() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // Process signup (dummy process, replace with actual signup logic)
    alert("Signup successful! Username: " + newUsername);
}
