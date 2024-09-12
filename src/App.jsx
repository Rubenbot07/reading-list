import { useState } from 'react'
import booksList from './books.json'
import { BooksContainer } from './components/BooksContainer'
import { BooksList } from './components/BooksList'
import './App.css'

function App() {
  const [booksAvailable, setBooksAvailable] = useState(booksList.library)


  return (
    <>
      <h1>Reading List</h1>
      <h2>{booksAvailable.length}  Books Available</h2>
      <BooksContainer books={booksAvailable} />
      <BooksList />
    </>
  )
}

export default App
