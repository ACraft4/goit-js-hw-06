/*Напиши скрипт который, при наборе текста в инпуте 

input#name-input (событие input), подставляет его текущее 

значение в span#name-output. Если инпут пустой, 

в спане должна отображаться строка "Anonymous".*/

const inputMessage = document.querySelector('#name-input'); 

const outputMessage = document.querySelector('#name-output');


inputMessage.addEventListener('input', (event) => {
    outputMessage.textContent = event.currentTarget.value;
    if ((outputMessage.textContent === '')) {
        outputMessage.textContent = "Anonymous"
    } 
})


