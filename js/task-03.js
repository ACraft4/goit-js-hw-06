const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

const urls = images.map(img => img.url);

const alts = images.map(img => img.alt);


for (let i = 0; i < images.length; i++) {
  galleryList.insertAdjacentHTML('beforebegin',
    `<li class= "item"><img src="${urls[i]}" alt="${alts[i]}" width="300px"></li>`)
}




// console.log(urls)
// console.log(alts)
// console.log(galleryList)



/*
Напиши скрипт для создания галереи изображений по массиву данных. 
В HTML есть список ul.gallery.

<ul class="gallery"></ul>
Используй массив объектов images для создания элементов <img> вложенных в <li>. 

Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
*/ 