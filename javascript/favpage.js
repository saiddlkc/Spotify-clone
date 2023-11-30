document.addEventListener("DOMContentLoaded", function () {
  // Abrufen der gespeicherten Daten aus dem Local Storage
  const storedData = localStorage.getItem("selectedData");
  if (storedData) {
    try {
      const selectedDataArray = JSON.parse(storedData);
      const reversedArray = selectedDataArray.reverse();

      const displayDiv = document.getElementById("displayData");
      displayDiv.classList.add("justify-content-start");
      displayDiv.classList.add("d-flex");
      displayDiv.classList.add("flex-wrap");
      displayDiv.classList.add("gap-2");
      displayDiv.classList.add("m-2");

      selectedDataArray.forEach((selectedData) => {
        const xBtn = document.createElement("button");
        const div = document.createElement("div");
        const img = document.createElement("img");
        const artistParagraph = document.createElement("p");
        const titleParagraph = document.createElement("p");
        const playButton = document.createElement("button");
        const stopButton = document.createElement("button");
        const favButton = document.createElement("button");

        img.src = selectedData.image;
        img.classList.add("img-small");
        artistParagraph.classList.add("text-white-50");
        titleParagraph.classList.add("text-white");

        artistParagraph.textContent = selectedData.artist;
        titleParagraph.textContent = selectedData.title;

        playButton.className = "btn playButton";
        playButton.setAttribute("data-src", selectedData.audio);
        playButton.innerHTML = `<i class="fas fa-play" style="color: #e4e7ec;"></i>`;
        playButton.addEventListener("click", playSong);

        stopButton.className = "btn stopButton";
        stopButton.setAttribute("data-src", selectedData.audio);
        stopButton.innerHTML = `<i class="fas fa-stop" style="color: #e4e7ec;"></i>`;

        xBtn.innerHTML = `<i class="fa-solid fa-x"></i>`;
        xBtn.classList.add("xbtn");

        favButton.innerHTML = `<i class="fas fa-heart" style="color: #e4e7ec;"></i>`;
        favButton.className = "favBtn";

        xBtn.addEventListener("click", function () {
          div.remove();

          selectedDataArray.splice(0 - 1);
          localStorage.removeItem(selectedData.value);

          localStorage.setItem(
            "selectedData",
            JSON.stringify(selectedDataArray)
          );

          console.log(
            "Element gelöscht und Daten aktualisiert:",
            selectedDataArray
          );
        });

        function playSong() {
          const previewUrl = this.getAttribute("data-src");
          const selectedArtist = this.previousSibling.innerText;
          const selectedImage =
            this.parentElement.querySelector(".img-small").src;

          console.log(previewUrl);

          document.getElementById("selectedArtist").innerText = selectedArtist;
          document.getElementById("selectedImage").src = selectedImage;
        }

        div.className = "box-shadow fontsize fixlength";
        div.appendChild(xBtn);
        div.appendChild(img);
        div.appendChild(artistParagraph);
        div.appendChild(titleParagraph);
        div.appendChild(playButton);
        div.appendChild(stopButton);
        div.appendChild(favButton);

        displayDiv.appendChild(div);
      });

      const playButtons = document.querySelectorAll(".playButton");
      const stopButtons = document.querySelectorAll(".stopButton");
      const audioPlayer = document.getElementById("audioPlayer");

      playButtons.forEach((playButton, index) => {
        playButton.addEventListener("click", function () {
          const audioSrc = selectedDataArray[index].audio;
          audioPlayer.src = audioSrc;
          audioPlayer.volume = 0.02;
          audioPlayer.play();
        });
      });

      stopButtons.forEach((stopButton) => {
        stopButton.addEventListener("click", function () {
          audioPlayer.pause();
        });
      });

      console.log(
        "Alle ausgewählten Daten erfolgreich angezeigt: for Daniel",
        selectedDataArray
      );
    } catch (error) {
      console.error("Fehler beim Parsen der gespeicherten Daten:", error);
    }
  } else {
    console.warn("Keine gespeicherten Daten gefunden.");
  }
});
