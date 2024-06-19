export const deleteImage = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
    method: 'DELETE'
  })
}
