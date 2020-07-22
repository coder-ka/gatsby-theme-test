import React from 'react'

export default function header({ background, children }) {
    return (
        <div className="relative">
            <div className="absolute w-full top-0 left-0">
                {background}
            </div>
            <div className="absolute">
                {children}
            </div>
        </div>
    )
}
