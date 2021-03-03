import images from "./gallery-items.js";


const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector(".js-lightbox"),
  btn: document.querySelector('[data-action="close-lightbox"]'),
  modal: document.querySelector(".lightbox__content"),
  lightbox__image: document.querySelector(".lightbox__image"),
  lightbox__overlay: document.querySelector(".lightbox__overlay")
}




const createGalleryElements = (({ original, preview, description }) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
});

const imgList = images.map(createGalleryElements).join('');
// console.log(imgList);

refs.gallery.insertAdjacentHTML('beforeEnd', imgList);


refs.gallery.addEventListener('click', onGalleryListClick)

 

function onGalleryListClick(event) {
 
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return
  }
  
    refs.lightbox.classList.add('is-open');
    refs.lightbox__image.src = event.target.getAttribute("data-source");
    refs.lightbox__image.alt = event.target.alt
        
    window.addEventListener('keydown', keyPress);
  
}

  
refs.btn.addEventListener('click', onBtnClickClose);

function onBtnClickClose() { 
  // event.preventDefault();
  refs.lightbox.classList.remove("is-open");
  refs.lightbox__image.src = '';
  refs.lightbox__image.alt = '';
  window.removeEventListener('keydown', keyPress);
}
refs.lightbox__overlay.addEventListener('click',onBtnClickClose);
 
function keyPress (event) {
    if(event.code==="Escape") {
      onBtnClickClose(event) 
    
    }
}






