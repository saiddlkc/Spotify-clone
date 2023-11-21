const input = document.getElementById("suche");
console.log(input);

// Function to handle both change and Enter key press
async function fetchData(searchArea) {
  try {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchArea}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "55af72b14emsh898860a4d9a021dp18af58jsn88df01865c54",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
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

      myH.innerText = song.title;
      myP.innerText = song.artist.name;
      myImg.setAttribute("src", song.album.cover_medium);
      playBtn.innerHTML = `<i class="fas fa-play" style="color: #e4e7ec;"></i>`;
      playBtn.setAttribute("data-src", song.preview);
      playBtn.addEventListener("click", playSong);
      stopBtn.innerHTML = `<i class="fas fa-stop" style="color: #e4e7ec;"></i>`;
      stopBtn.addEventListener("click", stopSong);

      myH.classList.add("d-flex");
      myH.classList.add("fontsize");
      myH.classList.add("flex-wrap");
      myH.classList.add("ms-2");
      myH.classList.add("align-items-end");
      myP.classList.add("ms-2");
      playBtn.classList.add("btn");
      stopBtn.classList.add("btn");
      //   myImg.classList.add("");
      myImg.classList.add("img-small");
      miniContainer.appendChild(myImg);
      miniContainer.appendChild(myP);
      miniContainer.appendChild(br);
      miniContainer.appendChild(myH);
      miniContainer.appendChild(playBtn);
      miniContainer.classList.add("border");
      miniContainer.classList.add("border-subtle");
      miniContainer.classList.add("fontsize");
      miniContainer.classList.add("fixlength");
      miniContainer.appendChild(stopBtn);

      container.appendChild(miniContainer);
    });
  } catch (error) {
    console.error(error);
  }
}

input.addEventListener("change", function (e) {
  e.preventDefault();
  const searchArea = input.value;
  console.log(searchArea);
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

  let audioElement = document.getElementById("audio-player");
  if (!audioElement) {
    audioElement = document.createElement("AUDIO");
    audioElement.id = "audio-player";
    document.body.appendChild(audioElement);
  }
  audioElement.src = previewUrl;
  audioElement.play();
}
function stopSong() {
  const audioElement = document.getElementById("audio-player");
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
  }
}
