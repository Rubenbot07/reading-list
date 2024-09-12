export function useBooks (books) {
    const mappedBooks = books?.map(book => ({
        id: book.book.ISBN,
        title: book.book.title,
        pages: book.book.pages,
        genre: book.book.renge,
        synopsis: book.book.synopsis,
        year: book.book.year,
        cover: book.book.cover,
        author: book.book.author
    }))
    return {mappedBooks}
  }