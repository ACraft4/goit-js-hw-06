const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfElements = document.querySelector('ul');

const elements = []; 

for(let i = 0; i < ingredients.length; i += 1) {
  const element = ingredients[i];

  const itemsElements = document.createElement('li');
  itemsElements.classList.add('item');
  itemsElements.textContent = element;
  elements.push(itemsElements);
};

listOfElements.append(...elements);

