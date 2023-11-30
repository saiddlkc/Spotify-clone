function checkPassword() {
    var password = document.getElementById("password").value;
    var errorText = document.getElementById("errorText");
    var passwordField = document.getElementById("password");

    if (password.length < 8) {
        errorText.style.display = "block";
        passwordField.style.border = "1px solid red";
    } else {
        errorText.style.display = "none";
        passwordField.style.border = "1px solid #ced4da"; 
        window.location.href = "http://127.0.0.1:5500/pages/form.html"; 
}

}
