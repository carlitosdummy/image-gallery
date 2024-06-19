import { useState, useEffect } from 'react'
import './App.css'
import { UploadImage } from './components/UploadImage/UploadImage'
import { SearchImage } from './components/SearchImage/SearchImage'
import { Images } from './components/Images/Images'
import { getImages } from './services/getImages'
import { postImage } from './services/postImage'
import { deleteImage } from './services/deleteImage'

function App () {
  const [images, setImages] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getImages().then(imgs => setImages(imgs))
  }, [])

  const addImage = (event) => {
    event.preventDefault()
    const title = event.target[0].value
    const thumbnailUrl = event.target[1].value
    const newImage = {
      title,
      thumbnailUrl,
      url: thumbnailUrl,
      id: window.crypto.randomUUID()
    }

    postImage(newImage)

    setImages([newImage, ...images])
    event.target[0].value = ''
    event.target[1].value = ''
  }

  const removeImage = (id) => {
    setImages(images.filter(image => image.id !== id))
    deleteImage(id)
  }

  const filterImage = (event) => {
    event.preventDefault()
    setSearch(event.target[0].value.toLocaleLowerCase())
  }

  return (
    <>
      <h1>Image Gallery</h1>
      <UploadImage addImage={addImage} />
      <SearchImage filterImage={filterImage} />
      <Images images={images} search={search} removeImage={removeImage} />
    </>
  )
}

export default App
