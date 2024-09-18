import { useContext } from "react"
import { ReadingListContext } from "../context/ReadingListContext"
import { useStorageListener } from "../hooks/useStorageListener"
export function BooksContainer () {
    const {
        addBooks,
        booksAvailable,
        handleOpenBookList,
        synchronize
    } = useContext(ReadingListContext)

    useStorageListener(synchronize) 

    const handleClick = (bookTitle, bookCover, bookID, bookGenre) => {
        addBooks(bookTitle, bookCover, bookID, bookGenre)
        handleOpenBookList()
    }

    return (
        <ul className='books__container'>
            {
                booksAvailable.map(book => {
                    return (
                        <li 
                            key={book.id}
                            className='books-item'
                            onClick={() => handleClick(book.title, book.cover, book.id, book.genre)}
                        >
                            <h3>{book.title}</h3>
                            <picture>
                                <img src={book.cover} alt={`${book.title} cover`} />
                            </picture>
                        </li>
                    )
                })
            }
        </ul>
    )
}