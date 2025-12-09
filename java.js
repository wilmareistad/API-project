const searchButton = document.querySelector("#searchButton");
const genreSelect = document.querySelector("#genreSelect");
const musicResult = document.querySelector("#result");

searchButton.addEventListener("click", () => {
  const genre = genreSelect.value;
  const url = `https://itunes.apple.com/search?term=${genre}&entity=song&limit=30`;

  fetch(url)
    .then((response) => response.json())
    .then((data) =>  {
      musicResult.innerHTML = "";
      console.log(data);

      const randomSong = Math.floor(Math.random() * data.results.length);
      const song = data.results[randomSong];

      const showResult = document.createElement("div");
      showResult.innerHTML = `
        <img src="${song.artworkUrl100.replace("100x100", "600x600")}" alt="Album cover">
        <h3>${song.artistName}</h3>
        <p>${song.trackName}</p>
        <audio controls src="${song.previewUrl}"></audio>
        <a href="${song.trackViewUrl}" target="_blank">Lägg till låten i ditt Itunes Album här!</a>`;

      showResult.style.animation = "zoomIn 0.5s ease-in-out";
      musicResult.appendChild(showResult);

      const audio = showResult.querySelector("audio");

      audio.addEventListener("play", () => {
        showResult.classList.add("playing");
      });

      audio.addEventListener("pause", () => {
        showResult.classList.remove("playing");
      });

      audio.addEventListener("ended", () => {
        showResult.classList.remove("playing");
      });
    })
    .catch((error) => console.error("Fel:", error));
});
