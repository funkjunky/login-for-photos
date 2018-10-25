export const getPhotos = albumId =>
  // see jsonplaceholder.typicode.com for info on this API.
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    .then(r => r.json());

export const uploadPhoto = photo =>
  fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'POST',
    body: JSON.stringify(photo),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then(r => r.json());
