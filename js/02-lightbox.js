import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItemsHTML = galleryItems.map(item => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
  </li>
`).join('');

gallery.innerHTML = galleryItemsHTML;


new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
});

console.log(galleryItems);

// Я собі це тут залишу для подальшого навчання :)
// galleryItems.forEach(item => {
//   const galleryItem = document.createElement('li');
//   galleryItem.classList.add('gallery__item');
  
//   const link = document.createElement('a');
//   link.classList.add('gallery__link');
//   link.href = item.original;
  
//   const image = document.createElement('img');
//   image.classList.add('gallery__image');
//   image.src = item.preview;
//   image.alt = item.description;

//   link.appendChild(image);
//   galleryItem.appendChild(link);
//   gallery.appendChild(galleryItem);
// });












