import { createContext, useState } from 'react'
import { useStorage } from '../hooks/useStorage'
import { useBooks } from '../hooks/useBooks'
import booksData from '../books.json'


export const ReadingListContext = createContext()

export const ReadingListProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const {mappedBooks} = useBooks(booksData.library)
    const {bookItem, saveBook} = useStorage('BOOK_LIST', [])
    const [bookList, setBookList] = useState(JSON.parse(localStorage.getItem('BOOK_LIST')))
    const findUniqueBooks = (library, booksToCompare) => {
        const idSet = {};

        // Llenar la hash table
        booksToCompare.forEach(book => {
          idSet[book.id] = true;
        });
        console.log(idSet)
      
        // Encontrar los libros únicos
        const uniqueBooks = [];
        library.forEach(book => {
          if (!idSet[book.id]) {
            uniqueBooks.push(book);
          }
        });
      
        return uniqueBooks;
    }
    
    const [booksAvailable, setBooksAvailable] = useState(findUniqueBooks(mappedBooks, bookList))
    


    const filteredBooks = (bookID) => {
        const filteredBooks = booksAvailable.filter(book => book.id !== bookID)
        setBooksAvailable(filteredBooks)
    }
    const handleBooks = (bookTitle, bookCover, bookID) => {
        filteredBooks(bookID)
        const newBooks ={
            title: bookTitle,
            cover: bookCover,
            id: bookID
        }
        const updatedBooks = [...bookItem, newBooks]
        saveBook(updatedBooks)
        setBookList(updatedBooks)
    }
    return (
        <ReadingListContext.Provider value={{
            count,
            setCount,
            handleBooks,
            bookList,
            booksAvailable
        }}
        >
            {children}
        </ReadingListContext.Provider>
    )
}