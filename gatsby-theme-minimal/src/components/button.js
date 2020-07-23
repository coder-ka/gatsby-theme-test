import React from 'react'

export default function Button({ color = "primary", dark = false, onClick = () => { }, children }) {
    const textColor = `text-${color}-${dark ? "900" : "100"}`
    const bgColor = `bg-${color}-${dark ? "100" : "500"}`
    const borderColor = `border-${color}-${dark ? "400" : "400"}`

    return <button className={`font-bold px-4 py-2 rounded ${textColor} ${bgColor} border ${borderColor}`}
        onClick={onClick}>
        {children}
    </button>
}