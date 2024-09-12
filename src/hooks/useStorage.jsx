import { useState, useEffect } from "react";

export function useStorage (bookList, initialValue) {
    const [bookItem, setBookItem] = useState(initialValue)
    
    useEffect(() => {
        const localStorageBook = localStorage.getItem(bookList)
        let parsedBook   
        if(localStorageBook) {
        parsedBook = JSON.parse(localStorageBook)
        setBookItem(parsedBook)
        } else {
        localStorage.setItem('BOOK_LIST', JSON.stringify(initialValue))
        parsedBook = initialValue 
        }
    }, [bookList])

    const saveBook = (newBook) => {
        localStorage.setItem(bookList, JSON.stringify(newBook))
        setBookItem(newBook)
    }
    return {saveBook, bookItem}
}