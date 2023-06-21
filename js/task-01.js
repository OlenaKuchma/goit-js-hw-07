const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');


const categoryCount = categoriesItems.length;
console.log(`Number of categories: ${categoryCount}`);


categoriesItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});