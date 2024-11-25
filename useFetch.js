import axios from "axios"
import { useState, useEffect } from "react"

export const useFetch = () => {
    const [name, setName] = useState<string>("juan")
    useEffect(() => {
        getName()
    }, [])

    const getName = async () => {
        let name = "Facundo Alvarez"
        const response = await axios.get(
            "https://random-word-api.herokuapp.com/word"
        )
        setName(response.data)
    }

    return name
}
