/* Счетчик состоит из спана и кнопок, которые, при клике, 
должны увеличивать и уменьшать его значение на единицу.

1. Создай переменную counterValue в которой будет храниться 
текущее значение счетчика и инициализируй её значением 0.

2. Добавь слушатели кликов на кнопки, внутри которых увеличивай 
или уменьшай значение счтетчика.

3. Обновляй интерфейс новым значением переменной counterValue.*/

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const valueSpan = document.querySelector('#value');
// let counterValue = 0;
// incrementBtn.addEventListener('click', () => {
//     valueSpan.textContent = counterValue += 1;
// });
// decrementBtn.addEventListener('click', () => {
//     valueSpan.textContent = counterValue -= 1;
// })



const counterValue = document.querySelector('#value'); 
const btnIncrement = document.querySelector('button[data-action="increment"]')
const btnDecrement = document.querySelector('button[data-action="decrement"]')

let counter = 0; 

const onPlus = (event) => {
    counterValue.textContent = counter += 1
}

const onMinus = () => {
    counterValue.textContent = counter -= 1
}

btnIncrement.addEventListener('click', onPlus)

btnDecrement.addEventListener('click', onMinus)



