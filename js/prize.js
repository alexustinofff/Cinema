const openBtn = document.getElementById(`btn-prize-open`);
const popup = document.querySelector('#prize-popup');
const closeBtn = document.querySelector('#prize-popup__close');
const nameField = document.querySelector('#prize-popup input[name="name"]').parentNode;
const emailField = document.querySelector('#prize-popup input[name="email"]').parentNode;

function popupToggle() {
    popup.classList.toggle('hidden')
}

// const ERROR_CLASS_NAME =    

function initializeField(field){
    const input = field.getElementsByTagName('input')[0];
    input.value = '';
}
initializeField(nameField);
initializeField(emailField);

openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;



//Занятие 23

if(/^[!\w\.]{2,16}@[\w]{2,6}\.[a-z]{2,3}$/i.test(emailValue)) { 
    emailFieldUtils.addError('не валидный Email');
    return
}