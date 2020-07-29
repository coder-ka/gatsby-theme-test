import React from 'react'
import * as FaIcons from "react-icons/fa"

export default function AppealItemFirstIcon({ name }) {
    const Icon = FaIcons["Fa" + name[0].toUpperCase() + name.slice(1).replace(/-(.)/g, (_, p1) => p1.toUpperCase())]

    return <Icon />
}
