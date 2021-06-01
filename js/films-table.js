const films = [
    {
        id: 22,
        start:"01:00",
        tittle:"xxxx",
        adult: true,
        genre: []
    },
    {
        id: 23,
start:"10:00",
tittle:"Человек-паук",
adult: false,
genre: [
    {
        name:"фантастика",
    },
    {
        name:"боеквик",  
    },
    {
        name:"приключения",  
    },
]
    },{
        id: 24,
        start:"12:00",
        tittle:"Собачья жизнь 2",
        genre: [
            {
                name:"фэнтези",
            },
            {
                name:"драма",  
            },
            {
                name:"комедия",  
            },
        ]
    },{
        id: 25,
        start:"14:00",
        tittle:"История игрушек 4",
        adult: false,
        genre: [
            {
                name:"мультфильм",
            },
            {
                name:"фэнтези",  
            },
            {
                name:"комедия",  
            },
        ]
    },{
        id: 26,
        start:"16:00",
        tittle:"Люди в черном:Интернешнл",
        adult: false,
        genre: [
            {
                name:"фантастика",
            },
            {
                name:"боевик",  
            },
            {
                name:"комедия",  
            },
        ]
    },
];

function renderFilmTableItem (film) {
    return `
    <tr class="schedule__dark-line">
    <td>
    <input type="checkbox" class="table__block" id="${film.tittle.replaceAll(' ', '-')}">
    <label for="${film.tittle.replaceAll(' ', '-')}" (oneclick)>
        <svg width=".75rem" height=".75rem" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z" fill="white"/>
            </svg>
    </label>
</td>
    <td>${film.start}</td>
    <td><a target="_blank" href="https://www.kinopoisk.ru/film/838/">${film.tittle}</a></td>
    <td>${film.genre.map(g=>g.name)}</td>
    </tr>
    `
}
const tableBody= document.getElementById('body__table');
tableBody.innerHTML = "";

for (let index = 0; index < films.length; index++) {
    if (!films[index].adult) {
tableBody.innerHTML += renderFilmTableItem (films[index]);
}
}