import { createContext, useEffect, useState, useMemo } from 'react'
import { useStorage } from '../hooks/useStorage'
import { useBooks } from '../hooks/useBooks'
import booksData from '../books.json'


export const ReadingListContext = createContext()

export const ReadingListProvider = ({ children }) => {
    const {bookItem, saveBook} = useStorage('BOOK_LIST', [])
    const {mappedBooks} = useBooks(booksData.library)
    const [bookList, setBookList] = useState(JSON.parse(localStorage.getItem('BOOK_LIST')))
    const [isOpenBookList, setIsOpenBookList] = useState(false)
    const [categoryFilter, setCategoryFilter] = useState('All')
    const findUniqueBooks = useMemo(() => {
        return (library, booksToCompare) => {
          const idSet = {};
          // Llenar la hash table (fill the hash table)
          if (booksToCompare) {
            booksToCompare.forEach(book => {
              idSet[book.id] = true;
            });
          }
      
          // Encontrar los libros únicos (find unique books)
          const uniqueBooks = [];
          library.forEach(book => {
            if (!idSet[book.id]) {
              uniqueBooks.push(book);
            }
          });
      
          return uniqueBooks;
        };
      }, [mappedBooks]);
    
    const [booksAvailable, setBooksAvailable] = useState(findUniqueBooks(mappedBooks, bookList))
    

    const currentBooks = (bookID) => {
        const currentBooks = booksAvailable.filter(book => book.id !== bookID)
        setBooksAvailable(currentBooks)
    }
    const addBooks = (bookTitle, bookCover, bookID, bookGenre) => {
        currentBooks(bookID)
        const newBooks ={
            title: bookTitle,
            cover: bookCover,
            id: bookID,
            genre: bookGenre
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
    } 
    const handleFilter = (item) => {
        setCategoryFilter(item)
        setBooksAvailable(findUniqueBooks(mappedBooks, bookList))
    }

    useEffect(() => {
        console.log('render')
        const newBooks = categoryFilter === 'All'
        ? findUniqueBooks(mappedBooks, bookList)
        : booksAvailable.filter(book => book.genre === categoryFilter);
        setBooksAvailable(newBooks)
    }, [categoryFilter])

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
            handleCloseBookList,
            setCategoryFilter,
            categoryFilter,
            handleFilter
        }}
        >
            {children}
        </ReadingListContext.Provider>
    )
}