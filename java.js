const searchButton = document.querySelector('#searchButton');
const genreSelect = document.querySelector('#genreSelect');
const musicResult = document.querySelector('#result');


// let genre = "rock";


searchButton.addEventListener('click', () => {
    const genre = genreSelect.value
    const url = `https://itunes.apple.com/search?term=${genre}&media=music&limit=50`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        musicResult.innerHTML = "";
        console.log(data)

        const randomSong = Math.floor(Math.random() * data.results.length);
        const song = data.results[randomSong];

        const showResult = document.createElement('div');
        showResult.innerHTML =`
            <h3>${song.artistName}</h3>
            <p>${song.trackName}</p>
            <audio controls src="${song.previewUrl}"></audio>`;
            musicResult.appendChild(showResult)
        });
    })

    .catch(error => console.error('Fel:', error));