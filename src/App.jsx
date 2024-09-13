import { BooksContainer } from './components/BooksContainer'
import { BooksList } from './components/BooksList'
import { ReadingListProvider} from './context/ReadingListContext'
import { BooksAvailable } from './components/BooksAvailable'
import './App.css'

function App() {

  return (
    <ReadingListProvider>
      <h1>Reading List</h1>
      <BooksAvailable />
      <BooksContainer />
      <BooksList />
    </ReadingListProvider>
  )
}

export default App
