import { useBooks } from "../hooks/useBooks"
export function BooksContainer ({ books }) {
    const {mappedBooks} = useBooks(books)

    function handleClick () {

        console.log('hola')
    }
    return (
        <ul className='books__container'>
            {
                mappedBooks.map(book => {
                    return (
                        <li 
                            key={book.id}
                            className='books-item'
                            onClick={() => handleClick()}
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