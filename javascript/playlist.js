const playlist = document.querySelector(".playlist");
console.log(playlist);
const divP = document.createElement("div")
console.log(divP);
divP.style.display ="flex"

console.log(playlist);



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
        // Box
     
    result.tracks.data.map((music)=>{

        const li = document.createElement("li")
    
        li.innerText = music.title
        const img =  document.createElement("img")
       
        img.src = music.album.cover

  
    playlist.appendChild(img)
    playlist.appendChild(li)


    })
        
    } catch (error) {
        console.error(error);
    }
}
playlistSee()



