import { createContext, useState } from 'react'
import { useStorage } from '../hooks/useStorage'
import { useBooks } from '../hooks/useBooks'
import booksData from '../books.json'


export const ReadingListContext = createContext()

export const ReadingListProvider = ({ children }) => {
    const {bookItem, saveBook} = useStorage('BOOK_LIST', [])
    const {mappedBooks} = useBooks(booksData.library)
    const [bookList, setBookList] = useState(JSON.parse(localStorage.getItem('BOOK_LIST')))
    const [isOpenBookList, setIsOpenBookList] = useState(true)
    const findUniqueBooks = (library, booksToCompare) => {
        const idSet = {};

        // Llenar la hash table
        if (booksToCompare) {
            booksToCompare.forEach(book => {
              idSet[book.id] = true;
            });
            console.log(idSet)
          
        } else {
            return mappedBooks
        }
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
    const addBooks = (bookTitle, bookCover, bookID) => {
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

    const removeBooks = (bookID) => {
        const newBooksList = bookList.filter(book => book.id !== bookID)
        setBookList(newBooksList)
        localStorage.setItem('BOOK_LIST', JSON.stringify(newBooksList))
        const booksCompare = JSON.parse(localStorage.getItem('BOOK_LIST'))
        setBooksAvailable(findUniqueBooks(mappedBooks, booksCompare))
        console.log(booksAvailable)
    } 

    const handleOpenBookList = () => {
        setIsOpenBookList(true)
    }

    const handleCloseBookList = () => {
        setIsOpenBookList(false)
    }

    return (
        <ReadingListContext.Provider value={{
            addBooks,
            removeBooks,
            bookList,
            booksAvailable,
            isOpenBookList,
            handleOpenBookList,
            handleCloseBookList
        }}
        >
            {children}
        </ReadingListContext.Provider>
    )
}