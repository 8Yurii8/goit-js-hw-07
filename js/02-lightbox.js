import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryCards = createGallery(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryCards);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<a class="gallery__item" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}"
                />
              </a>`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captions: true,
  captionPosition: "bottom",
});
