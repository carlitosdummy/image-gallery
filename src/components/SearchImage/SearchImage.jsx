import './SearchImage.css'

export const SearchImage = ({ filterImage }) => {
  return (
    <section className='search-image-section'>
      <h2>Search image by title</h2>
      <form onSubmit={filterImage} className='search-image'>
        <label>
          <span>Title:</span>
          <input type='text' placeholder='New York' />
        </label>
        <button>Search</button>
      </form>
    </section>
  )
}
