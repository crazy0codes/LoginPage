const emailInput = document.querySelector('input[type="email"]');
const submit = document.querySelector('button[type="submit"]');
const emailError = document.querySelector('#emailError');
emailInput.addEventListener('input',function(){
  if(/[\s]/g.test(this.value)) {
   emailError.innerHTML = "&#10071; Enter a valid email";
   this.style.outlineColor = 'red';
   }
   else{
    emailError.innerText = "";
    this.style.outlineColor = 'rgb(21, 209, 18)';
   }
})
