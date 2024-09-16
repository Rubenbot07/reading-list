import { useContext } from "react"
import { categories } from "../utils/categories"
import { ReadingListContext } from "../context/ReadingListContext"
export function BooksFilter () {
    const {
        handleFilter
    } = useContext(ReadingListContext)
    const filters = ['All', ...categories]
    const changeFilter = (item) => {
        handleFilter(item)
    }
    return (
        <div>
            <span>Filters</span>
            <select onChange={(event) => changeFilter(event.target.value)}>
                {
                    filters.map((item, index) => {
                        return (
                            <option key={index}>
                                {item}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}