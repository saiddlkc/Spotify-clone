


const playlist = document.querySelectorAll(".playlist");

console.log(playlist);

const resu = document.createElement("div");
const li = document.createElement("li");

const playl = playlist.tracks.data.forEach((play) => {
 track.title
   track.artist.name
 track.album.title

})




 async function playlistSee() {
 
    // Fetch Rock
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/playlist/5';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e20758a5acmsh7521840f2e5d171p17736bjsn049c16fce793',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
playlistSee()



