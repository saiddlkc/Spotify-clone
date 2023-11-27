document.addEventListener("DOMContentLoaded", function () {
  // Abrufen der gespeicherten Daten aus dem Local Storage
  const storedData = localStorage.getItem("selectedData");
  if (storedData) {
    try {
      const selectedData = JSON.parse(storedData);

      // Anzeigen der Daten auf der anderen Seite
      const displayDiv = document.getElementById("displayData");
      displayDiv.classList.add("box-shadow");
      displayDiv.classList.add("fontsize");
      displayDiv.classList.add("box-shadow");
      displayDiv.innerHTML = `
      <img src="${selectedData.image}" alt="Selected Image">
          <p class="lieb">${selectedData.artist}</p>
          <p class="lieb">${selectedData.title}</p>
        `;

      console.log("Daten erfolgreich angezeigt:", selectedData);
    } catch (error) {
      console.error("Fehler beim Parsen der gespeicherten Daten:", error);
    }
  } else {
    console.warn("Keine gespeicherten Daten gefunden.");
  }
});
