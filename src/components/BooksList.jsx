import { useContext } from "react"
import { ReadingListContext } from "../context/ReadingListContext"

export function BooksList () {
    const {
        bookList
    } = useContext(ReadingListContext)
    return (
        <section className='books-list__container'>
            {bookList[0] ? (
                bookList?.map(book => {
                    return(
                        <p
                          key={book.title}
                        >
                            {book.title}
                        </p>
                    )
                })
            ) : (
                <p>Empty</p>
            )
            }
        </section>
    )
}