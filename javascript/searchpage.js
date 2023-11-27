import keys from "../key.js";
const input = document.getElementById("suche");

let selectedBtn = null;

document.addEventListener("DOMContentLoaded", function () {
  async function fetchData(searchArea) {
    try {
      const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchArea}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": keys.key,
          "X-RapidAPI-Host": keys.host,
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      document.getElementById("ergebnisse").innerHTML = "";

      data.data.forEach((song) => {
        const container = document.getElementById("ergebnisse");
        const miniContainer = document.createElement("DIV");
        const myH = document.createElement("H4");
        const myP = document.createElement("P");
        const myImg = document.createElement("IMG");
        const br = document.createElement("br");
        const playBtn = document.createElement("button");
        const stopBtn = document.createElement("BUTTON");
        const favBtn = document.createElement("BUTTON");

        myH.innerText = song.title;
        myP.innerText = song.artist.name;
        myImg.setAttribute("src", song.album.cover_medium);
        playBtn.innerHTML = `<i class="fas fa-play" style="color: #e4e7ec;"></i>`;
        playBtn.setAttribute("id", "play");
        playBtn.setAttribute("data-src", song.preview);
        playBtn.addEventListener("click", playSong);
        stopBtn.innerHTML = `<i class="fas fa-stop" style="color: #e4e7ec;"></i>`;
        stopBtn.addEventListener("click", stopSong);
        favBtn.innerHTML = `<i class="fas fa-heart" style="color: #e4e7ec;"></i>`;
        myImg.classList.add("img-round");
        myH.classList.add("d-flex");
        myH.classList.add("fontsize");
        myH.classList.add("flex-wrap");
        myH.classList.add("ms-2");
        myH.classList.add("align-items-end");
        myH.classList.add("text-white");
        myP.classList.add("text-white-50");
        myP.classList.add("ms-2");
        favBtn.classList.add("fav-btn");
        favBtn.classList.add("btn");
        playBtn.classList.add("btn");
        stopBtn.classList.add("btn");
        myImg.classList.add("img-small");
        miniContainer.appendChild(myImg);
        miniContainer.appendChild(myP);
        miniContainer.appendChild(br);
        miniContainer.appendChild(myH);
        miniContainer.appendChild(playBtn);
        miniContainer.classList.add("box-shadow");
        miniContainer.classList.add("fontsize");
        miniContainer.classList.add("fixlength");
        miniContainer.appendChild(stopBtn);
        miniContainer.appendChild(favBtn);

        container.appendChild(miniContainer);
      });
      const dynamicFavBtns = document.querySelectorAll(".fav-btn");
      dynamicFavBtns.forEach((btn) => {
        btn.addEventListener("click", handleClick);
      });
    } catch (error) {
      console.error(error);
    }
  }

  const input = document.getElementById("suche");
  input.addEventListener("change", function (e) {
    e.preventDefault();
    const searchArea = input.value;
    fetchData(searchArea);
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const searchArea = input.value;
      console.log(searchArea);
      fetchData(searchArea);
    }
  });

  function playSong() {
    const previewUrl = this.getAttribute("data-src");
    const selectedArtist = this.previousSibling.innerText;
    const selectedTitle = this.previousSibling.previousSibling.innerText;
    const selectedImage = this.parentElement.firstChild.src;
    console.log(previewUrl);

    document.getElementById("selectedArtist").innerText = selectedArtist;
    document.getElementById("selectedTitle").innerText = selectedTitle;
    document.getElementById("selectedImage").src = selectedImage;

    let audioElement = document.getElementById("audio-player");
    if (!audioElement) {
      audioElement = document.createElement("AUDIO");
      audioElement.id = "audio-player";

      document.body.appendChild(audioElement);
    }
    audioElement.volume = 0.02;
    audioElement.src = previewUrl;
    audioElement.play();
  }

  function stopSong() {
    const audioElement = document.getElementById("audio-player");
    if (audioElement) {
      audioElement.pause();
    }
  }

  function handleClick(e) {
    const clickedBtn = e.currentTarget;
    console.log(clickedBtn);
    console.log(selectedBtn);

    if (selectedBtn !== clickedBtn) {
      selectedBtn = clickedBtn;
      clickedBtn.style.backgroundColor = "green";

      // Artist, Title und Image aus den Vorgängerelementen abrufen
      const selectedArtist =
        clickedBtn.parentElement.querySelector("p").innerText;
      const selectedTitle =
        clickedBtn.parentElement.querySelector("h4").innerText;
      const selectedImage = clickedBtn.parentElement.querySelector("img").src;
      const selectedAudio = clickedBtn.parentElement
        .querySelector("button")
        .getAttribute("data-src");

      // Abrufen der vorhandenen Daten aus dem Local Storage oder Initialisieren eines leeren Arrays
      const storedData = localStorage.getItem("selectedData");
      const existingData = storedData ? JSON.parse(storedData) : [];

      // Hinzufügen der neuen Auswahl zu den vorhandenen Daten
      const newSelection = {
        artist: selectedArtist,
        title: selectedTitle,
        image: selectedImage,
        audio: selectedAudio,
      };

      existingData.push(newSelection);

      // Speichern des aktualisierten Arrays im Local Storage
      localStorage.setItem("selectedData", JSON.stringify(existingData));
    }
  }
});
