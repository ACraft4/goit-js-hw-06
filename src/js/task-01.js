const ulItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulItems.length}`);

ulItems.forEach((e) => 
console.log('Category:', e.firstElementChild.textContent, 'Elements:', e.lastElementChild.children.length));











