import { useContext } from "react"
import { ReadingListContext } from "../context/ReadingListContext"

export function BooksAvailable () {
    const {
        booksAvailable
    } = useContext(ReadingListContext)
    return (
        <h2>{booksAvailable.length} Books Available</h2>
    )
}