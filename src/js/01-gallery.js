import galleryMarkupTpl from '../templates/gallery-markup.hbs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems));


new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  widthRatio: .9,
});

function createGalleryItem() { 
  return galleryMarkupTpl(galleryItems);
};


console.log(galleryItems);
