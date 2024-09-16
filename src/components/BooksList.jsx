import { useContext } from "react"
import { ReadingListContext } from "../context/ReadingListContext"

export function BooksList () {
    const {
        bookList,
        removeBooks,
        isOpenBookList,
        handleCloseBookList,
    } = useContext(ReadingListContext)
    return (
        <section className={`${isOpenBookList ? '' : 'inactive'} books-list__container`}>
            <button className='book-list--close-button' onClick={handleCloseBookList}>X</button>
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