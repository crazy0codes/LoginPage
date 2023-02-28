const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const submit = document.querySelector('button[type="submit"]');
const genderInput = document.querySelectorAll('input[type="radio"]');
const newUser = document.querySelector('.register')
const oldUser = document.querySelector('.loginNow')

let Link = document.querySelectorAll('a')[0];
let Links = document.querySelectorAll('a')[1];

//Errors
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector("#passwordError")

emailInput.addEventListener('input',function(){
  if(/[\s]/g.test(this.value)) {
   emailError.innerHTML = "&#10071;Enter a valid email";
   this.style.outlineColor = 'red';
   }
   else{
    emailError.innerText = "";
    this.style.outlineColor = 'rgb(21, 209, 18)';
   }
})

passwordInput.addEventListener('input',function(){
    if(this.value == ""){passwordError.innerHTML = "&#10071;Enter a valid password"} else {passwordError.innerText = ''}
})

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
