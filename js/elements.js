import images from "./gallery-items.js";

const galleryList = document.querySelector('.js-gallery');



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
console.log(imgList);

galleryList.insertAdjacentHTML('beforeEnd', imgList);
