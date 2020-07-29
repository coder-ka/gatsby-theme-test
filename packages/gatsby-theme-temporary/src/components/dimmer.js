import React from 'react'

export default function Dimmer(props) {
    return (
        <div className={`absolute top-0 left-0 w-full h-full ${props.className}`}>
            {props.closeButton ?
                props.closeButton({
                    className: "absolute top-0 right-0 mr-4 mt-4 text-gray-100 text-4xl font-bold cursor-pointer",
                    onClick: props.onIntentToClose
                }) : null}
            <div className="w-full h-full flex justify-center items-center">
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events  */}
                <div className="w-full sm:w-auto" onClick={e => e.stopPropagation()}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
