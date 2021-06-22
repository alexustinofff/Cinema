const filmsData = [
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

const filmHelper = {
    getId() {
        return this.id || this.tittle.replaceAll('', '-');
    },
    getTittle() {
        return this.tittle;
    },
    getStart() {
        return this.start;
    },
    getGenre() {
return this.genre.map(g => g.name).join(', ');
    },
}
// Логика по отрисовке
// <tr 93строка>class="schedule__dark-line"
function renderFilmTableItem (film) {
    return `
    <tr>
    <td>
    <input type="checkbox" id="${film.tittle.replaceAll(' ', '-')}">
    <label for="${film.tittle.replaceAll(' ', '-')}" (oneclick)>
        <svg width=".75rem" height=".75rem" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z" fill="white"/>
            </svg>
    </label>
</td>
    <td>${filmHelper.getStart.apply(film)}</td>
    <td><a target="_blank" href="https://www.kinopoisk.ru/film/838/">${filmHelper.getTittle.apply(film)}</a></td>
    <td>${filmHelper.getGenre.apply(film)}</td>
    </tr>
    `
}
// Логика по сбору массива
const tableBody = document.getElementById('body__table');
tableBody.innerHTML = '';

for (let index = 0; index < filmsData.length; index++) {
        const film = new Film(filmsData[index]);
        console.log(film)
        if (film.isNotForAdult()) {
tableBody.innerHTML += renderFilmTableItem(film.data);
    }
}