const ulItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulItems.length}`); 

ulItems.forEach(element => {
    const getTitleEl = element.querySelector('h2');
    const getUlRefs = element.querySelectorAll('li'); 
    console.log(`Category: ${getTitleEl.textContent}`);
    console.log(`Elements: ${getUlRefs.length}`); 
});









