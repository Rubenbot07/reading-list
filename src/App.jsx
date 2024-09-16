import { BooksContainer } from './components/BooksContainer'
import { BooksList } from './components/BooksList'
import { ReadingListProvider} from './context/ReadingListContext'
import { BooksAvailable } from './components/BooksAvailable'
import { OpenBookList } from './components/OpenBookList'
import { categories } from './utils/categories'
import './App.css'
import { BooksFilter } from './components/BooksFilter'

function App() {
  console.log(categories)
  return (
    <ReadingListProvider>
      <h1>Reading List</h1>
      <BooksFilter/>
      <OpenBookList />
      <BooksAvailable />
      <BooksContainer />
      <BooksList />
    </ReadingListProvider>
  )
}

export default App
