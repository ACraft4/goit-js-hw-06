
const validInput = document.querySelector('#validation-input');
console.log(validInput)
const lengthInput = validInput.dataset.length


validInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length == lengthInput) {
        
        validInput.classList.add('valid')
        validInput.classList.remove('invalid')
        console.log('Bluuuuuuuuuur');
    } else {
        
        validInput.classList.add('invalid')
        validInput.classList.remove('valid')
        console.log('noBlur')
    }
});
