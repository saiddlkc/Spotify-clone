
const contain = document.querySelector(".contain")
contain.style.display = "flex"

const playlist = document.querySelector(".playlist");
playlist.style.display = "flex"
playlist.style.height = "100vh"
playlist.style.flexWrap = "wrap"
playlist.style.backgroundImage = " linear-gradient(#272727 ,black)"

console.log(playlist);
const divP = document.createElement("div")
divP.classList.add("divp")
divP.style.display = "flex"
divP.style.justifyContent = "end"
divP.style.backgroundColor = " #121212"
divP.style.flexWrap = "wrap"
divP.style.width = "100%"
divP.style.height = "8vh"

const btn = document.querySelector(".btn")
btn.style.margin = "30px 30px"
btn.style.border = "none"
btn.style.color = "black"
btn.style.display = "flex"
btn.style.justifyContent = "center"
btn.style.alignItems = "center"
btn.style.borderRadius = "50px"
btn.style.padding = "0px 70px 0 70px"

const registrieren = document.querySelector(".registrieren");
registrieren.style.border = "none"
registrieren.style.padding = "10px 30px"
registrieren.style.margin = "25px 30px"
registrieren.style.backgroundColor = " #121212"
registrieren.style.color = "white"
registrieren.style.borderRadius = "50px"

const anmelden = document.querySelector(".anmelden")
anmelden.style.border = "none"
anmelden.style.padding = "10px 30px"
anmelden.style.margin = "25px 30px"
anmelden.style.borderRadius = "50px"
divP.appendChild(btn)
divP.appendChild(registrieren)
divP.appendChild(anmelden)
playlist.appendChild(divP)

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
        result.tracks.data.map((music) => {
            const divCon = document.createElement("div");
            divCon.classList.add("divCon")
            divCon.style.display = "flex"
            divCon.style.borderRadius = "7px"
            divCon.style.width = "100%"
            divCon.style.height = "10%"
            divCon.style.cursor = "pointer"
            divCon.style.margin = "10px"
            const li = document.createElement("li")
            li.style.listStyle = "none"
            li.style.fontSize = " 14px"
            li.style.height = "20px"
            li.style.padding = "10px"
            li.style.color = "white"
            li.innerText = music.title


            const audio = document.createElement("audio")
            audio.setAttribute("controls", "")

            const source = document.createElement("source")
            source.src = music.preview
            source.type = "audio/mpeg"
            source.style.border="2px solid red"
           
            const img = document.createElement("img")
            img.style.borderRadius = "7px"
            img.style.boxShadow = " 1px 6px 10px 1px #121212"
            img.src = music.album.cover
            playlist.appendChild(divCon)
            playlist.appendChild(img)
            playlist.appendChild(li)
            divCon.appendChild(img)
            divCon.appendChild(li)
            divCon.appendChild(audio)
            audio.appendChild(source)



        })

    } catch (error) {
        console.error(error);
    }
}
playlistSee()



