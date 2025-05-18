import { useEffect, useState } from "react"
import "./index.modules.css"
export default function Home() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        async function getBooks() {
            const response = await 
        }
    }, [])

    return (
        <h1>Home</h1>
    )
}