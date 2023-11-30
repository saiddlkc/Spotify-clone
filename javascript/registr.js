function checkEmail() {
  var email = document.getElementById("username").value;
  var errorText = document.getElementById("error");
  var emailField = document.getElementById("username");

  if (email.includes('@') && email.includes('.')) {
    var dataToSave = { "email": email };
    var jsonData = JSON.stringify(dataToSave);
    localStorage.setItem('userData', jsonData);
    window.location.href = "http://127.0.0.1:5500/pages/pass.html";
  } else {
    errorText.style.display = "block";
    emailField.style.border = "2px solid red";
  }
}
