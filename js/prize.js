const openBtn = document.getElementById(`btn-prize-open`);
const popup = document.querySelector('#prize-popup');
const closeBtn = document.querySelector('#prize-popup__close');
const nameField = document.querySelector('#prize-popup input[name="name"]').parentNode;
const emailField = document.querySelector('#prize-popup input[name="email"]').parentNode;
const form = document.getElementById('prize-form');
const form = document.getElementById('prize-form');

function popupToggle() {
    popup.classList.toggle('hidden')
}

const SELECT_SELECTED = 'input-select-selected';
// const ERROR_CLASS_NAME =    

function initializeField(field){
    const input = field.getElementsByTagName('input')[0];
    input.value = '';
}
return {
    getValue() {
        return input.value
    },
    focus() {
        input.focus()
    }
}

const nameFieldUtils = initializeField(nameField);
const emailFieldUtils = initializeField(emailField);

openBtn.addEventListener('click', () => {
    popupToggle();
    nameFieldUtils.focus();
});
selectPrize.addEventListener('change', () => {
    selectPrize.classList.add('input-select-selected')
})
closeBtn.onclick = popupToggle;

function handleSubmit(event) {
event.preventDefault();
const data = {
    name: nameFieldUtils.getValue(),
    email: emailFieldUtils.getValue(),
}

const url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
url.search = new URLSearchParams(data).toString();

fetch(url.toString());
}
form.addEventListener('submit', handleSubmit)

//Занятие 23

if(/^[!\w\.]{2,16}@[\w]{2,6}\.[a-z]{2,3}$/i.test(emailField)) { 
    emailFieldUtils.addError('не валидный Email');
}