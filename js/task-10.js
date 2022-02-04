//Обозначаем области с которыми будем работать, создаем переменные
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');
const input = document.querySelector('input');
//Вешаем слушателя событий, вкладываем переменные функции как аргументы
createBtn.addEventListener('click', createBoxes); 
destroyBtn.addEventListener('click', destroyBoxes); 
//Прописываем логику в функционале программы

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

function createBoxes(amount) {
  amount = input.value; 
  let counter = 0;
  for (let i = 1; i < amount; i++) {
    counter += 10; 
    if (i > 0) {
      const div = document.createElement('div');
      div.style.width = 30 + 'px'; 
      div.style.height = 30 + 'px';
      div.style.backgroundColor = getRandomHexColor();
      box.append(div);
    }
  }
}

function destroyBoxes() {
  box.innerHTML = '';
  input.value = '';
  };
