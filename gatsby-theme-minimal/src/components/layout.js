import React from 'react'

export default function Layout({ children, header, stickyBar }) {
    return <>
        <div className="w-full sticky top-0 left-0 z-50 shadow">
            {stickyBar}
        </div>
        <div>
            {header}
        </div>
        <div>
            {children}
        </div>
    </>
}
