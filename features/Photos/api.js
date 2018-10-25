export const getPhotos = albumId =>
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    .then(r => r.json());
