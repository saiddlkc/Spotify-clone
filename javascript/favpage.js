document.addEventListener("DOMContentLoaded", function () {
  // Abrufen der gespeicherten Daten aus dem Local Storage
  const storedData = localStorage.getItem("selectedData");
  if (storedData) {
    try {
      const selectedDataArray = JSON.parse(storedData);

      // Anzeigen aller ausgewählten Daten auf der anderen Seite
      const displayDiv = document.getElementById("displayData");
      displayDiv.classList.add("justify-content-start");
      displayDiv.classList.add("d-flex");
      displayDiv.classList.add("flex-wrap");
      displayDiv.classList.add("gap-2");
      displayDiv.classList.add("m-2");

      selectedDataArray.forEach((selectedData) => {
        const div = document.createElement("div");
        div.classList.add("box-shadow");
        div.classList.add("fontsize");
        div.innerHTML = `
            <img src="${selectedData.image}" alt="Selected Image">
            <p class="lieb">${selectedData.artist}</p>
            <p class="lieb">${selectedData.title}</p>
            `;
        // <button data-src="${selectedButton}" class="btn">P</button>
        displayDiv.appendChild(div);
      });

      console.log(
        "Alle ausgewählten Daten erfolgreich angezeigt:",
        selectedDataArray
      );
    } catch (error) {
      console.error("Fehler beim Parsen der gespeicherten Daten:", error);
    }
  } else {
    console.warn("Keine gespeicherten Daten gefunden.");
  }
});
