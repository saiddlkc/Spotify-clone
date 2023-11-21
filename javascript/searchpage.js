const input = document.getElementById("suche");
console.log(input);
async;

input.addEventListener("change");
const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "55af72b14emsh898860a4d9a021dp18af58jsn88df01865c54",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
