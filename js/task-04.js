let counterValue = 0; 

const refs = {
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value')
};

const onBtnClick = (number) => {
    counterValue += number;
    refs.value.textContent = counterValue;
}

refs.btnDecrement.addEventListener('click', () => onBtnClick(-1));
refs.btnIncrement.addEventListener('click', () => onBtnClick(+1));