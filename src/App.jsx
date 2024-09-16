import { BooksContainer } from './components/BooksContainer'
import { BooksList } from './components/BooksList'
import { ReadingListProvider} from './context/ReadingListContext'
import { BooksAvailable } from './components/BooksAvailable'
import { OpenBookList } from './components/OpenBookList'
import './App.css'

function App() {

  return (
    <ReadingListProvider>
      <h1>Reading List</h1>
      <OpenBookList />
      <BooksAvailable />
      <BooksContainer />
      <BooksList />
    </ReadingListProvider>
  )
}

export default App
