function allFieldsValid(name, date, month, year) {
    if (name === "" || date === "" || month === "" || year === "") {
        return false;
    }

    const radioButtons = document.querySelectorAll('input[name="geschlecht"]');
    let radioButtonChecked = false;
    radioButtons.forEach((radio) => {
        if (radio.checked) {
            radioButtonChecked = true;
        }
    });

    if (!radioButtonChecked) {
        const errorRadio = document.getElementById("errorRadio");
        errorRadio.style.display = "block";
        return false;
    } else {
        const errorRadio = document.getElementById("errorRadio");
        errorRadio.style.display = "none";
    }

    const formError = document.getElementById("form-data");
    const errorNumb = document.getElementById("errorNumb");
    const errorMonth = document.getElementById("errorMonth");
    const errorYear = document.getElementById("errorYear");
    const errorYear2 = document.getElementById("errorYear-2");

    if (date === "" && month === "monat" && year === "") {
        formError.style.display = "block";
        dateInput.style.borderColor = "red";
        monthInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";
        return false;
    }

    if (date === "") {
        errorNumb.style.display = "block";
        dateInput.style.borderColor = "red";
        return false;
    } else {
        errorNumb.style.display = "none";
        dateInput.style.borderColor = "";
    }

    if (month === "monat") {
        errorMonth.style.display = "block";
        monthInput.style.borderColor = "red";
        return false;
    } else {
        errorMonth.style.display = "none";
        monthInput.style.borderColor = "";
    }

    const enteredYear = parseInt(year, 10);
    if (enteredYear < 1900 || year === "") {
        if (year === "") {
            errorYear2.style.display = "block";
            yearInput.style.borderColor = "red";
        } else {
            errorYear.style.display = "block";
            yearInput.style.borderColor = "red";
        }
        return false;
    } else {
        errorYear.style.display = "none";
        yearInput.style.borderColor = "";
    }

    return true;
}

function saveToLocalStorage(name, date, month, year) {
   
    localStorage.setItem('userData', name);
}


function checkForm() {
    const nameField = document.getElementById("fname");
    const errorName = document.getElementById("errorName");
    const dateInput = document.getElementById("dateInput");
    const monthInput = document.getElementById("monthInput");
    const yearInput = document.getElementById("yearInput");
    const formError = document.getElementById("form-data");
    const errorNumb = document.getElementById("errorNumb");
    const errorMonth = document.getElementById("errorMonth");
    const errorYear = document.getElementById("errorYear");
    const errorYear2 = document.getElementById("errorYear-2");
    const errorRadio = document.getElementById("errorRadio");

    if (nameField.value === "") {
        errorName.style.display = "block";
        nameField.style.borderColor = "red";
    } else {

        errorName.style.display = "none";
        nameField.style.borderColor = "";
    }

    const radioButtons = document.querySelectorAll('input[name="geschlecht"]');
    let radioButtonChecked = false;
    radioButtons.forEach((radio) => {
        if (radio.checked) {
            radioButtonChecked = true;
        }
    });

    if (!radioButtonChecked) {
        errorRadio.style.display = "block";
    } else {
        errorRadio.style.display = "none";
    }




    if (dateInput.value === "" && monthInput.value === "monat" && yearInput.value === "") {
        formError.style.display = "block";
        dateInput.style.borderColor = "red";
        monthInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";
        return
    }


    if (dateInput.value === "") {
        errorNumb.style.display = "block";
        dateInput.style.borderColor = "red";
    } else {
        errorNumb.style.display = "none";
        dateInput.style.borderColor = "";
    }


    if (monthInput.value === "monat") {
        errorMonth.style.display = "block";
        monthInput.style.borderColor = "red";
    } else {
        errorMonth.style.display = "none";
        monthInput.style.borderColor = "";
    }


    const enteredYear = parseInt(yearInput.value, 10);
    if (enteredYear < 1900 || yearInput.value === "") {

        if (yearInput.value === "") {
            errorYear2.style.display = "block";
            yearInput.style.borderColor = "red";
        } else {
            errorYear.style.display = "block";
            yearInput.style.borderColor = "red";
        }

    } else {
        errorYear.style.display = "none";
        yearInput.style.borderColor = "";
    }


    if (allFieldsValid(nameField.value, dateInput.value, monthInput.value, yearInput.value)) {
        saveToLocalStorage(nameField.value, dateInput.value, monthInput.value, yearInput.value);
        window.location.href = "http://127.0.0.1:5500/pages/searchpage.html";
    }
}




