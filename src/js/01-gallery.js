// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";
// Change code below this line

// console.log(galleryItems);
console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const galleryHTML = galleryItems.map(galleryItemsMurkup).join("");
galleryEl.insertAdjacentHTML("beforeend", galleryHTML);

function galleryItemsMurkup({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

const lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });
