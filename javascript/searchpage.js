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

      myH.innerText = song.title;
      myP.innerText = song.artist.name;
      myImg.setAttribute("src", song.album.cover_medium);
      console.log(myH);
      console.log(myP);

      myH.classList.add("d-flex");
      myH.classList.add("fontsize");
      myH.classList.add("flex-wrap");
      myH.classList.add("ms-2");
      myH.classList.add("align-items-end");
      myP.classList.add("ms-2");
      //   myImg.classList.add("");
      myImg.classList.add("img-small");
      miniContainer.appendChild(myImg);
      miniContainer.appendChild(myP);
      miniContainer.appendChild(br);
      miniContainer.appendChild(myH);
      miniContainer.classList.add("border");
      miniContainer.classList.add("border-subtle");
      miniContainer.classList.add("fontsize");
      miniContainer.classList.add("fixlength");

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
