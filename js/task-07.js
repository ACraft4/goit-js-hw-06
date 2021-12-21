const rangeInput = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onRangeChange = (event) => {
    const {value} = event.target;
    textEl.style.fontSize = `${value}px`;
};
rangeInput.addEventListener('input', onRangeChange); 


