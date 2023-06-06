const refs = {
    lightbox: document.querySelector('.lightbox'),
     button: document.querySelector('.lightbox__button'),
    image: document.querySelector('.lightbox__image'),
     overlay: document.querySelector('.lightbox__overlay')
}

refs.button.addEventListener('click', closeModal)
 
window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        closeModal()
        window.removeEventListener('keydown', closeModal)
    }
})
refs.overlay.addEventListener('click', (evt) => {
     closeModal()
})

export function closeModal() {
    refs.lightbox.classList.remove('is-open')
    refs.image.src = '';
}