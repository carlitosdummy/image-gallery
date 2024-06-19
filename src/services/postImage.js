export const postImage = (newImage) => {
  fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'POST',
    body: JSON.stringify(newImage),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}
