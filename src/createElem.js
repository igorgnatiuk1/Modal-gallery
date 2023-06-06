import {galleryItems} from './app.js'


export const sum = galleryItems.map(({preview, original, description}) => {
        return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="#"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('')


