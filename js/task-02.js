const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientList = ingredients.map(item => {
  const newItem = document.createElement('li');
  newItem.textContent = item;
  newItem.classList.add('item');
  return newItem;
});

ingredientsEl.append(...ingredientList);