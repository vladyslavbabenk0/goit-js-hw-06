const categories = document.querySelector('#categories');
const categoriesItems = categories.querySelectorAll('li.item');

console.log(`Number of categories: ${categories.children.length}`);

categoriesItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const count = item.querySelectorAll('li').length;
    console.log(`Category: ${title}\nElements: ${count}`);
});

