import { BooksContainer } from './components/BooksContainer'
import { BooksList } from './components/BooksList'
import './App.css'
import { ReadingListProvider} from './context/ReadingListContext'

function App() {

  return (
    <ReadingListProvider>
      <h1>Reading List</h1>
      <h2>  Books Available</h2>
      <BooksContainer />
      <BooksList />
    </ReadingListProvider>
  )
}

export default App
