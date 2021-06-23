function Film(filmData){
this.data = filmData;
this.isNotForAdult = function() {
    return !this.data.adult 
}
this.renderFilmTableItem = function() {
    return 111;
}
}
