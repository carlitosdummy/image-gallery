import './Images.css'

export const Images = ({ images, search, removeImage }) => {
  return (
    <>
      <h4>{images.length !== 0 ? `Total photos: ${images.length}` : 'There are no photos'}</h4>
      <ul className='images-ul'>
        {images.map(image => {
          if (image.title.toLocaleLowerCase().includes(search)) {
            return (
              <li key={image.id}>
                <h3>{image.title}</h3>
                <img src={image.thumbnailUrl} alt={image.title} />
                <button onClick={() => removeImage(image.id)}>Remove photo</button>
              </li>
            )
          }
          return null
        })}
      </ul>
    </>
  )
}
