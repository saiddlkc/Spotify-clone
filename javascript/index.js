let users = [
    { username: "user@gmail.com", password: "User1234" },
    { username: "user_dastify", password: "Secret12" }
];

function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if (!username || !password) {
        document.getElementById("errorText").innerText = "Error: Füllen Sie alle Felder aus.";
        return;
    }


    const eightCharacters = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);

    if (!(eightCharacters && hasNumber && hasUpperCase)) {
        document.getElementById("errorText").innerText = "Error:Das Passwort muss aus mindestens 8 Zeichen bestehen, einschließlich Zahlen und Großbuchstaben.";
        return;
    }


    const userExists = users.some(user => user.username === username);
    if (userExists) {
        document.getElementById("errorText").innerText = "Der Benutzer existiert bereits.";
        return;
    }


    users.push({ username, password });

    saveUsersToLocalStorage();


    window.location.href = 'https://open.spotify.com/intl-de';

});