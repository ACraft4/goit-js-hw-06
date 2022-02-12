const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulIngredients = document.querySelector('ul'); 

const result = [];

for (let i = 0; i < ingredients.length; i++) {
  let li = document.createElement('li');
  li.textContent = ingredients[i];
  li.classList.add('item');
  result.push(li)
  
}
ulIngredients.append(...result); 





// Условие
// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

// 1. Обращаемся к элементу через Quarryselector
// 2. 