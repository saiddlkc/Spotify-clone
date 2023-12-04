function checkEmail() {
  let email = document.getElementById("username").value;
  let errorText = document.getElementById("error");
  let emailField = document.getElementById("username");

  if (email.includes('@') && email.includes('.')) {
    localStorage.setItem('savedEmail', email); 
    window.location.href = "http://127.0.0.1:5500/pages/pass.html";
  } else {
    errorText.style.display = "block";
    emailField.style.border = "2px solid red";
  }
}