document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('fname').value.trim();
    const date = document.getElementById('dateInput').value.trim();
    const month = document.getElementById('monthInput').value.trim();
    const year = document.getElementById('yearInput').value.trim();
    const gender = document.querySelector('input[name="geschlecht"]:checked');

    let errors = [];

  
    if (name === '') {
        errors.push('Gib einen Namen für dein Profil ein');
        document.getElementById('fname').classList.add('error');
    } else {
        document.getElementById('fname').classList.remove('error');
    }

    if (date === '' || month === 'Monat' || year === '') {
        errors.push('Gib dein Geburtsdatum ein');
        document.getElementById('dateInput').classList.add('error');
        document.getElementById('monthInput').classList.add('error');
        document.getElementById('yearInput').classList.add('error');
    } else {
        document.getElementById('dateInput').classList.remove('error');
        document.getElementById('monthInput').classList.remove('error');
        document.getElementById('yearInput').classList.remove('error');
    }



    if (errors.length > 0) {
        console.log(errors);
    } else {
        window.location.href = 'http://127.0.0.1:5500/pages/searchpage.html';
    }
});