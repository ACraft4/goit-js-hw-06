const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (submitEvent))

function submitEvent(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget; 
    
    if (email.value !== '' && password.value !== '') {
    } else {
        alert('введи данные')
    }
    console.log(`Email: ${email.value} Password: ${password.value}`)

    event.currentTarget.reset();
}






