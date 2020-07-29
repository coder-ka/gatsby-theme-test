import { useState } from "react"

export default function useBoolean() {
    const [boolean, setBoolean] = useState(false)

    const setTrue = () => setBoolean(true)
    const setFlase = () => setBoolean(false)
    const toggle = () => setBoolean(!boolean)

    return [
        boolean,
        setTrue,
        setFlase,
        toggle
    ]
}