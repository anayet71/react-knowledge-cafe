import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)


  /* Event handler */
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)

  }
  const handleMarkAsRead = (id ,time) => {
    const newReadingTime = (readingTime + time)
    setReadingTime(newReadingTime)
    // remove the read blog from the bookmark
    // console.log('remove id')
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks); // ✅ Correct function for updating bookmarks
    
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto '>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}> </Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

      </div>
    </>
  )
}

export default App
