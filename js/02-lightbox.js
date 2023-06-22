import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const galleryItem = document.createElement('a');
  galleryItem.href = item.original;
  galleryItem.innerHTML = `<img class="gallery__image" src="${item.preview}" alt="${item.description}" />`;
  gallery.appendChild(galleryItem);
});



const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,               
    captionDelay: 250,            
    captionSelector: 'img',       
    captionType: 'attr',          
    captionPosition: 'bottom',    
    captionAttribute: 'alt'     
  });


lightbox.refresh();

gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName === 'IMG') {
    
    lightbox.open();
  }
});

console.log(galleryItems);









