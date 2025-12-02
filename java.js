const searchButton = document.querySelector('#searchButton');
const genreSelect = document.querySelector('#genreSelect');
const musicResult = document.querySelector('#result');


let genre = "rock";
const url = `https://itunes.apple.com/search?term=${genre}&entity=song&limit=10`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Fel:', error));