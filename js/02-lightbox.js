import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItemsHTML = galleryItems.map(item => `
<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" 
      src="${item.preview}" 
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


// const gallery = document.querySelector('.gallery');

// // Create the gallery items dynamically
// galleryItems.forEach(item => {
//   const galleryItem = document.createElement('a');
//   galleryItem.href = item.original;
//   galleryItem.innerHTML = `<img class="gallery__image" src="${item.preview}" alt="${item.description}" />`;
//   gallery.appendChild(galleryItem);
// });

// // Initialize SimpleLightbox
// const lightbox = new SimpleLightbox('.gallery a');

// // Refresh the lightbox after dynamically adding gallery items
// lightbox.refresh();

// // Attach a click event listener to the <ul> element with class 'gallery'
// gallery.addEventListener('click', e => {
//   e.preventDefault();

//   // Check if the clicked element is an <img> element
//   if (e.target.tagName === 'IMG') {
//     // Open the lightbox
//     lightbox.open();
//   }
// });

// console.log(galleryItems);









