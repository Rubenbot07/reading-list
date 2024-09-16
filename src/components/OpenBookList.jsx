import { useContext } from 'react'
import { ReadingListContext } from '../context/ReadingListContext'

export function OpenBookList () {
    const {
        handleOpenBookList
    } = useContext(ReadingListContext)
    const handleClick = () => {
        handleOpenBookList()
    }
    return (
        <div className='book-list--open-button' onClick={handleClick}>
            📚
        </div>
    )
}