import  books  from '../books.json'

export const categories = new Set()

books.library.map(book => {
    categories.add(book.book.genre)

})

