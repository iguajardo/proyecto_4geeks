import { useContext, useState } from "react"
import { Context } from "../store/appContext"


export const useColors = (categoria = "") => {

    const [state, setState] = useState(categoria)
    const { actions } = useContext(Context)

    const handleChange = (e, value) => {
        setState(e.target.value)
        actions.changeCalendar({
            [value]: e.target.value
        })
    }

    return [state, handleChange, setState]
}
