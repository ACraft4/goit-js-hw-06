const inputSizeControl = document.querySelector('#font-size-control');

const textAbracadabra = document.querySelector('#text')




function changeSize() {
    textAbracadabra.style.fontSize = inputSizeControl.value + 'px'
}

inputSizeControl.addEventListener('input', (changeSize)); 