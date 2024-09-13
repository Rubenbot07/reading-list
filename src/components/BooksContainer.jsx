import { useContext } from "react"
import { ReadingListContext } from "../context/ReadingListContext"

export function BooksContainer () {
    const {
        addBooks,
        booksAvailable
    } = useContext(ReadingListContext)


    return (
        <ul className='books__container'>
            {
                booksAvailable.map(book => {
                    return (
                        <li 
                            key={book.id}
                            className='books-item'
                            onClick={() => addBooks(book.title, book.cover, book.id)}
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