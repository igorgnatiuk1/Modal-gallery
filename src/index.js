import { sum } from "./createElem.js"
import { closeModal } from "./closeModal.js"
import './style.css'

const refs = {
    gallery: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.lightbox'),
    image: document.querySelector('.lightbox__image')
}

refs.gallery.innerHTML = sum

const imagesRef = document.querySelectorAll('.gallery__image')

let currentIndex;

refs.gallery.addEventListener('click', openModal)
window.addEventListener('keydown', switchImage)

closeModal()

function switchImage(evt) {
    if (evt.key === 'ArrowLeft') currentIndex -= 1;
    if (evt.key === 'ArrowRight') currentIndex += 1;
    if (currentIndex < 0) currentIndex = imagesRef.length - 1;
    if (currentIndex === imagesRef.length) currentIndex = 0;
    refs.image.src = imagesRef[currentIndex].dataset.source
}

function openModal(evt) {
    if(evt.target.nodeName !== 'IMG') return
    refs.lightbox.classList.add('is-open')
    refs.image.src = evt.target.dataset.source;
    currentIndex = [...imagesRef].findIndex(el => el.dataset.source === refs.image.src)
   
}
