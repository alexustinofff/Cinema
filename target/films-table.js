"use strict";

var filmsData = [{
  id: 22,
  start: "01:00",
  tittle: "xxxx",
  adult: true,
  genre: []
}, {
  id: 23,
  start: "10:00",
  tittle: "Человек-паук",
  adult: false,
  genre: [{
    name: "фантастика"
  }, {
    name: "боеквик"
  }, {
    name: "приключения"
  }]
}, {
  id: 24,
  start: "12:00",
  tittle: "Собачья жизнь 2",
  genre: [{
    name: "фэнтези"
  }, {
    name: "драма"
  }, {
    name: "комедия"
  }]
}, {
  id: 25,
  start: "14:00",
  tittle: "История игрушек 4",
  adult: false,
  genre: [{
    name: "мультфильм"
  }, {
    name: "фэнтези"
  }, {
    name: "комедия"
  }]
}, {
  id: 26,
  start: "16:00",
  tittle: "Люди в черном:Интернешнл",
  adult: false,
  genre: [{
    name: "фантастика"
  }, {
    name: "боевик"
  }, {
    name: "комедия"
  }]
}];
var filmHelper = {
  getId: function getId() {
    return this.id || this.tittle.replaceAll('', '-');
  },
  getTittle: function getTittle() {
    return this.tittle;
  },
  getStart: function getStart() {
    return this.start;
  },
  getGenre: function getGenre() {
    return this.genre.map(function (g) {
      return g.name;
    }).join(', ');
  }
}; // Логика по отрисовке
// <tr 93строка>class="schedule__dark-line"

function renderFilmTableItem(film) {
  return "\n    <tr>\n    <td>\n    <input type=\"checkbox\" id=\"".concat(film.tittle.replaceAll(' ', '-'), "\">\n    <label for=\"").concat(film.tittle.replaceAll(' ', '-'), "\" (oneclick)>\n        <svg width=\".75rem\" height=\".75rem\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z\" fill=\"white\"/>\n            </svg>\n    </label>\n</td>\n    <td>").concat(filmHelper.getStart.apply(film), "</td>\n    <td><a target=\"_blank\" href=\"https://www.kinopoisk.ru/film/838/\">").concat(filmHelper.getTittle.apply(film), "</a></td>\n    <td>").concat(filmHelper.getGenre.apply(film), "</td>\n    </tr>\n    ");
} // Логика по сбору массива


var tableBody = document.getElementById('body__table');
tableBody.innerHTML = '';

for (var index = 0; index < filmsData.length; index++) {
  var film = new Film(filmsData[index]);
  console.log(film);

  if (film.isNotForAdult()) {
    tableBody.innerHTML += renderFilmTableItem(film.data);
  }
}