function renderLikedSong(song) {
  const songItem = document.createElement("div");
  songItem.classList.add("liked-song-item");

  const songTitle = document.createElement("h3");
  songTitle.textContent = song.title;
  songItem.appendChild(songTitle);

  const songArtist = document.createElement("p");
  songArtist.textContent = `Artist: ${song.artist.name}`;
  songItem.appendChild(songArtist);
  return songItem;
}


async function renderLikedSongs() {
  try {
    const userId = "DEEZER_USER_ID_HERE"; 
    const url = `https://api.deezer.com/user/${userId}/tracks`;

    

    const response = await fetch(url);
    const data = await response.json();

    const likedSongsContainer = document.querySelector(
      "#liked-songs-container"
    );
    data.data.forEach((song) => {
      const renderedSong = renderLikedSong(song);
      likedSongsContainer.appendChild(renderedSong);
    });
  } catch (error) {
    console.error(error);
  }
}


window.addEventListener("load", renderLikedSongs);
