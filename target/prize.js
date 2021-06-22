"use strict";

var openBtn = document.getElementById("btn-prize-open");
var popup = document.querySelector('#prize-popup');
var closeBtn = document.querySelector('#prize-popup__close');
var nameField = document.querySelector('#prize-popup input[name="name"]').parentNode;
var emailField = document.querySelector('#prize-popup input[name="email"]').parentNode;

function popupToggle() {
  popup.classList.toggle('hidden');
} // const ERROR_CLASS_NAME =    


function initializeField(field) {
  var input = field.getElementsByTagName('input')[0];
  input.value = '';
}

initializeField(nameField);
initializeField(emailField);
openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle; //Занятие 23

if (/^[!\w\.]{2,16}@[\w]{2,6}\.[a-z]{2,3}$/i.test(emailField)) {
  emailFieldUtils.addError('не валидный Email');
}