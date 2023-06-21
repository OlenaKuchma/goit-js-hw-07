import { galleryItems } from './gallery-items.js';
// Change code below this line



const list = document.querySelector('.gallery')

list.insertAdjacentHTML('beforeend', createMarkupItems(galleryItems));
list.addEventListener('click', handlerClickItem);

function createMarkupItems(Item) {
    return Item.map(({ preview, original, description }) => `
    <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`).join('')
}
function handlerClickItem(evt) {
    const cardItem = evt.target.closest('.gallery-item');
    if (evt.target.classList.contains('js-add')) {
        const obj = findCarItem(cardItem);
        const instance = basicLightbox.create(createAddToCartMarkup(obj));
        instance.show();
    } else if (cardItem) { //evt.target !== evt.currentTarget
        const obj = findCarItem(cardItem);
        const instance = basicLightbox.create(createDetailInfoMarkup(obj));
        instance.show();
    }
}



console.log(Item);

console.log(galleryItems);
