import React from 'react'

export default function Layout({ children, header }) {
    return <>
        <div>
            {header}
        </div>
        <div>
            {children}
        </div>
    </>
}
