const SYPEX URL = 'http://api.sypexgeo.net/';
function getRequest(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState ==4)
        let res = $.parseJSON(xhr.responseText);
        console.log(res.city.name.ru);
    }
}

jQuery(document).ready(($) => {
    getRequest(SYPEX URL);
})