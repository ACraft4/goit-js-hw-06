const ulList = document.querySelectorAll('li.item').length;
console.log("Number of categories:", ulList);

const ulElements = document.querySelectorAll('li.item')

for (let i = 0; i < ulElements.length; i++) {
    console.log(`Category: ${ulElements[i].querySelector("h2").textContent}`);
    console.log(`Elements: ${ulElements[i].querySelectorAll("li").length}`);
}




