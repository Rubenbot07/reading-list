import { useContext } from "react"
import { ReadingListContext } from "../context/ReadingListContext"

export function BooksList () {
    const {
        bookList,
        removeBooks
    } = useContext(ReadingListContext)
    return (
        <section className='books-list__container'>
            {bookList ? (
                bookList?.map(book => {
                    return(
                        <div
                          className='list-item__container'
                          key={book.title}
                        >
                            <picture>
                                <img src={book.cover} alt="" />
                            </picture>
                            <span className='remove--button' onClick={() => removeBooks(book.id)}>X</span>
                        </div>
                    )
                })
            ) : (
                <p>Empty</p>
            )
            }
        </section>
    )
}