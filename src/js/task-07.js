const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = '20px'; 

const onInputChange = (event) => {
    textEl.style.fontSize = event.currentTarget.range;
};

inputEl.addEventListener('input', onInputChange); 