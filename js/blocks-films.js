const blockFilmsWrapper = document.getElementById('films-block-wrapper');
blockFilmsWrapper.innerHTML = '';

const apiHeaders = {
    'accept': 'application/json',
    'X-API-KEY': '453f5685-b886-46cf-9d5a-0f535a639741',
}

fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
    headers: {
        ...apiHeaders
    }
})
.then(data => data.json())
.then(data => {
for (let index = 0; index < data.films.length; index++) {
    const film = data.films[i];

}
const id = `blocks-films-desc-${film.filmId}`;
data.films.forEach((film) =>{
     blockFilmsWrapper.innerHTML += `
     <div class="item__wrapper">
     <a href="https://www.kinopoisk.ru/film/522941/" target="_blank">
     <span class="films-wrapper__tittle">${film.nameRu}</span>
     <p id="${id}" class="films-wrapper__subtittle">
         ...loading
     </p>
     <p class="wrapper__fones"></p>
     <figure>
         <img src="${film.posterUrlPreview}" alt="Survivor">
     </figure>
     </a>
 </div>
     `
fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${film.filmId}`, {
    headers: {
        ...apiHeaders
    },
    cors: 'no-cors'
})
.then(data => data.json())
.then(({data: {description}}) => {
const desc = document.getElementById(id);
desc.innerText = description;

if (!description) {
const root = desc.parentNode.parentNode;

blockFilmsWrapper.removeChild(root);
}
})
})
})