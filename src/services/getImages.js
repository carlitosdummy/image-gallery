export const getImages = () => {
  return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(photos => photos.slice(0, 20))
}
