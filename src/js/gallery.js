import galleryElements from '../gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');

galleryElements.forEach(image => madeGallery(image));

function madeGallery() {
    
    galleryRef.insertAdjacentHTML('afterbegin', `
    <li class="gallery__item"><a class="gallery__link" href="">
    <img class="gallery__image" src="" data-source="" alt="" /></a></li>`);
};

const getImageRefs = document.querySelectorAll('.gallery__image');

getImageRefs.forEach(setElementImage);

function setElementImage(element, key) {
    element.alt = galleryElements[key].description;
    element.src = galleryElements[key].preview;
    element.dataset.source = galleryElements[key].original;

}



