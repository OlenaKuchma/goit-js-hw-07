import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItemsHTML = galleryItems.map(item => `
<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" 
    src="${item.preview}" 
    data-source="${item.original}" 
    alt="${item.description}" />
  </a>
</li>
`).join('');


gallery.innerHTML = galleryItemsHTML;


gallery.addEventListener('click', e => {
  e.preventDefault();

  
  if (e.target.tagName === 'IMG') {
    const source = e.target.dataset.source;
    const lightbox = basicLightbox.create(`<img src="${source}">`);
    lightbox.show();
  }
});




console.log(galleryItems);
