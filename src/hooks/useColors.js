import { useState } from "react"


export const useColors = (categoria = "") => {

    const [state, setState] = useState(categoria)

    const handleChange = ({ target }) => {
        setState(target.value)
    }

    return [state, handleChange]
}
