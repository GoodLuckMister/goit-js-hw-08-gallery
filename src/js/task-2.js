
const galleryRef = document.querySelector('.js-gallery');
const buttonClosedRef = document.querySelector('button[data-action="close-lightbox"]');
const backdropRef = document.querySelector('.js-lightbox');
const imageOriginalRef = document.querySelector('.js-image__1280px');
const imageRef = galleryRef.querySelectorAll('img');
let indexImage = 0;



galleryRef.addEventListener('click', openModalWindow);
buttonClosedRef.addEventListener('click', closeModalWindow);
backdropRef.addEventListener('click', closeModalWindowClick);


function openModalWindow(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    backdropRef.classList.add('is-open');
    const sourceImages = event.target.dataset.source;
    const altIMage = event.target.alt;
     indexImage = Number(event.target.dataset.index);

    
  
    imageOriginalRef.src = sourceImages;
    imageOriginalRef.alt = altIMage;
    imageOriginalRef.dataset.index = indexImage;
    window.addEventListener('keydown', pressKey)
    return indexImage;
}

 
function pressKey(event) {
    
   if (event.code === 'Escape') {
        closeModalWindow()
    } 
            if (event.code !== 'ArrowRight' && event.code !== 'ArrowLeft') {
            return;
        }
        if (event.code === 'ArrowRight') {
            indexImage += 1;
             if(indexImage > 8) {
            indexImage = 0;
            }else   if(indexImage < 0) {
            indexImage = 8;
            }
        setImageOrigin()
        
        }
        if (event.code === 'ArrowLeft') {
            indexImage -= 1;
             if(indexImage > 8) {
            indexImage = 0;
            }else  if(indexImage < 0) {
            indexImage = 8;
            }
     setImageOrigin()
        }
};


function closeModalWindowClick(event) {
        if (event.target.nodeName !== 'IMG') {
    closeModalWindow()
}

}

function closeModalWindow() { 
   
    window.removeEventListener('keydown', pressKey)

    backdropRef.classList.remove('is-open');
    imageOriginalRef.src = "";
    

    
};

function setImageOrigin() {
            imageOriginalRef.dataset.index = imageRef[indexImage].dataset.index
            imageOriginalRef.alt = imageRef[indexImage].alt;
            imageOriginalRef.src = imageRef[indexImage].dataset.source;   
}





    

        
        
  