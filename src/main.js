import { searchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = form.querySelector('.search-input').value.trim();
  if (query === '') {
    return;
  }
  gallery.innerHTML = '';
  loader.classList.toggle('is-hidden');

 searchImages(query)
    .then(images => {
      if (images.length === 0) {
          iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            titleColor: '#fff',
            messageColor: '#fff',
            color: '#ef4040',
            icon: null
          });
      } else {
        renderGallery(images);
        lightbox.refresh ();
      }
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      form.reset();
      loader.classList.add('is-hidden');
    });
});
