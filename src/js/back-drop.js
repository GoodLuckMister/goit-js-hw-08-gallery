const galleryRef = document.querySelector('.js-gallery');
const buttonClosedRef = document.querySelector('button[data-action="close-lightbox"]');
const backdropRef = document.querySelector('.js-lightbox');


galleryRef.addEventListener('click', event => {
    event.preventDefault();
    backdropRef.classList.add('is-open');
    console.log('click')
    

})

buttonClosedRef.addEventListener('click', closeModalWindow)
backdropRef.addEventListener('click', closeModalWindow)


function closeModalWindow() { 
    backdropRef.classList.remove('is-open');
 }