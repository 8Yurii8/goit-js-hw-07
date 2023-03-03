import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const galleryCards = createGallery(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryCards);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>`;
    })
    .join("");
}

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const imgSrc = event.target.dataset.source;
    const instance = basicLightbox.create(`
      <img width="1400" height="900" src="${imgSrc}">
    `);
    instance.show();

    const closeModal = () => {
      instance.close();
      document.removeEventListener("keydown", closeModal);
    };

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
  }
});
