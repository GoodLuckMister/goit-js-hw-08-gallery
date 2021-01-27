import galleryElements from '../gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
console.log(galleryElements);
console.log(galleryRef);

function madeGallery() {
    
    galleryRef.insertAdjacentHTML('afterbegin', `
    <li class="gallery__item"><a class="gallery__link" href="">
    <img class="gallery__image" src="" data-source="" alt="" /></a></li>`);
};
galleryElements.forEach(image => madeGallery(image));

const getImageRefs = document.querySelectorAll('.gallery__image');
const getLinkImage = document.querySelectorAll('.gallery__link');

console.log(getImageRefs);
// console.log(getLinkImage);

getImageRefs.forEach((element, key) => {
    element.alt = galleryElements[key].description;
    element.src = galleryElements[key].preview;
    element.dataset.source = galleryElements[key].original;

})


const buttonClosedRef = document.querySelector('.lightbox__button');
console.log(buttonClosedRef);
const backdropRef = document.querySelector('.js-lightbox');
console.log(backdropRef);

galleryRef.addEventListener('click', event => {
    event.preventDefault();
    backdropRef.classList.add('is-open');

})

buttonClosedRef.addEventListener('click', event => {
    event.preventDefault();
     backdropRef.classList.remove('is-open');

})
