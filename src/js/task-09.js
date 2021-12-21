function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const Btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
Btn.addEventListener('click', () => {
  span.textContent = document.body.style.backgroundColor = getRandomHexColor();;
});
