import React from 'react'

export default function AppealItem(props) {
    return (
        <div className="py-4">
            <div className="text-5xl text-primary-700 sm:flex sm:justify-center">
                {props.icon}
            </div>
            <div className="mt-4 font-bold sm:text-center">
                {props.title}
            </div>
            <div className="mt-2 text-gray-700 sm:text-center">
                {props.description}
            </div>
        </div>
    )
}
