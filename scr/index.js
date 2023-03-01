const newUserEmail = document.querySelectorAll('input[type="email"]')[0];
const newUserPassword = document.querySelectorAll('input[type="password"]')[0];

const oldUserEmail = document.querySelectorAll('input[type="email"]')[1];
const oldUserPassword = document.querySelectorAll('input[type="password"]')[1];

const submit = document.querySelector('button[type="submit"]');
const genderInput = document.querySelector('input[type="radio"]');
const newUser = document.querySelector('.register')
const oldUser = document.querySelector('.loginNow')

let Link = document.querySelector('#login');
let Links = document.querySelector('#register');



//Errors
const registerEmailError = document.querySelectorAll('.emailError')[0];
const registerPasswordError = document.querySelectorAll(".passwordError")[0];

const loginEmailError = document.querySelectorAll('.emailError')[1];
const loginPasswordError = document.querySelectorAll(".passwordError")[1];

//Checking
newUserEmail.addEventListener('input',() => checkEmail(registerEmailError));
oldUserEmail.addEventListener('input',() => checkEmail(loginEmailError));

function checkEmail(Error){
    if(/[\s]/g.test(Error.previousElementSibling.value)) {
     Error.innerHTML = "&#10071;Enter a valid email";
     Error.previousElementSibling.style.outlineColor = 'red';
     }
     else{
      Error.innerText = "";
      Error.previousElementSibling.style.outlineColor = 'rgb(21, 209, 18)';
     }
}

newUserPassword.addEventListener('input',() => checkPassword(registerPasswordError));
oldUserPassword.addEventListener('input',() => checkPassword(loginPasswordError));

function checkPassword(Error){
    if(Error.previousElementSibling.value == ""){
        Error.innerHTML = "&#10071;Enter a valid password"}
    else {
        Error.innerHTML = ''}
}

Links.onclick = link
Link.onclick = link
function link () {
    if(oldUser.classList.contains('block')){
        oldUser.classList.remove('block')
        newUser.classList.add('block');
    }
    else {
        oldUser.classList.add('block')
        newUser.classList.remove('block'); 
    }
}
