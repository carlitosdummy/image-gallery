import './UploadImage.css'

export const UploadImage = ({ addImage }) => {
  return (
    <section className='upload-image-section'>
      <h2>Add your own image</h2>
      <form className='upload-image' onSubmit={addImage}>
        <label>
          <span>Title:</span>
          <input required type='text' placeholder='My home' />
        </label>
        <label>
          <span>Image URL:</span>
          <input required type='text' placeholder='url.com' />
        </label>
        <button>Add image</button>
      </form>
    </section>
  )
}
