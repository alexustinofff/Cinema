"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var blockFilmsWrapper = document.getElementById('films-block-wrapper');
blockFilmsWrapper.innerHTML = '';
var apiHeaders = {
  'accept': 'application/json',
  'X-API-KEY': '453f5685-b886-46cf-9d5a-0f535a639741'
};
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
  headers: _objectSpread({}, apiHeaders)
}).then(function (data) {
  return data.json();
}).then(function (data) {
  // for (let index = 0; index < data.films.length; index++) {
  //     const film = data.films[i];
  // }
  data.films.forEach(function (film) {
    var id = "blocks-films-desc-".concat(film.filmId);
    blockFilmsWrapper.innerHTML += "\n     <div class=\"item__wrapper\">\n     <a href=\"https://www.kinopoisk.ru/film/522941/\" target=\"_blank\">\n     <span class=\"films-wrapper__tittle\">".concat(film.nameRu, "</span>\n     <p id=\"").concat(id, "\" class=\"films-wrapper__subtittle\">\n         ...loading\n     </p>\n     <p class=\"wrapper__fones\"></p>\n     <figure>\n         <img src=\"").concat(film.posterUrlPreview, "\" alt=\"Survivor\">\n     </figure>\n     </a>\n </div>\n     ");
    fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/".concat(film.filmId), {
      headers: _objectSpread({}, apiHeaders),
      cors: 'no-cors'
    }).then(function (data) {
      return data.json();
    }).then(function (_ref) {
      var description = _ref.data.description;
      var desc = document.getElementById(id);
      desc.innerText = description;

      if (!description) {
        var root = desc.parentNode.parentNode;
        blockFilmsWrapper.removeChild(root);
      }
    });
  });
});