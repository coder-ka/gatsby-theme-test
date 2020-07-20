import React from 'react'
import "../styles/style.css"

export default function Layout({ children }) {
    return (
        <div>
            <div>
                <div></div>
            </div>
            <div>
            {children}
            </div>
        </div>
    )
}
