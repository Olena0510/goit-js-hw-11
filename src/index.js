import Notiflix from 'notiflix';
import ImageQuery from './service_image';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";


const searchForm = document.querySelector('#search-form');
const imageGallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load');

const newImage = new ImageQuery();

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onload);


 async function onSearch(evt) {
    evt.preventDefaul();

     newQuery.query = evt.currentTarget.elements.searchQuery.value;
     

     await newImage.fetchImage().then(data => console.log(data));
     
    if (!imageQuery.query) {
        Notiflix.Notify.failure('Empty query. Please input something for search.' )
        return;
     }
      newImage.resetPage();
     clearGallery()
}

function onload() {
    newImage.fetchImage().then(data => console.log(data));
}

function createMarkup(arr) {
     const markupImg = arr.map(({ webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads }) => `<div class="photo-card">
    <a href="${largeImageURL}" class="gallery__item">
    < img class="img" src="${webformatURL}" alt = ${tags} loading = "lazy" />
        </a>
  <div class="info">
    <p class="info-item"><b>Likes</b>${likes}</p>
    <p class="info-item"><b>Views</b>${views}</p>
    <p class="info-item"><b>Comments</b>${comments}</p>
    <p class="info-item"><b>Downloads</b>${downloads}</p>
    </div>
</div>`).join();
    
    imageGallery.insertAdjacentHTML('beforeend', markupImg);
};

function clearGallery() {
    imageGallery.innerHTML = '';
}



function onload() {
    
}