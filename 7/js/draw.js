import { getPhotoDescriptions } from './data.js';

const drawMiniatures = () => {
  const templatePictures = document.querySelector('#picture').content;
  const photosContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();
  const photos = getPhotoDescriptions();

  for (let i = 0; i < photos.length; i++) {
    const currentPhoto = photos[i];
    const photo = templatePictures.cloneNode(true);
    const imgElement = photo.querySelector('.picture__img');
    const likesElement = photo.querySelector('.picture__likes');
    const commentsElement = photo.querySelector('.picture__comments');
    imgElement.src = currentPhoto.url;
    imgElement.alt = currentPhoto.description;
    likesElement.textContent = currentPhoto.likes;
    commentsElement.textContent = currentPhoto.comments.length;
    fragment.appendChild(photo);
  }

  photosContainer.appendChild(fragment);
};

export { drawMiniatures };
