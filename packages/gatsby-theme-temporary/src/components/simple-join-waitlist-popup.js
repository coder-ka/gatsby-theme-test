import React, { useRef, useEffect } from 'react'

export default function JoinWaitlistPopup(props) {
    const input = useRef(null)

    useEffect(() => {
        input.current && input.current.focus()
    }, [])

    return (
        <div className="sm:w-auto rounded bg-white mx-2 sm:mx-0 px-2 py-6 sm:p-10">
            <div className="w-full sm:flex sm:flex-row">
                <div className="w-full sm:w-64 sm:mr-4">
                    {props.emailInput({
                        ref: input,
                        className: "w-full border-2 border-gray-900 px-4 py-3 rounded"
                    })}
                    {props.emailInputErrorMessage ? (
                        <div className="mt-2 text-accent-600 font-bold">
                            {props.emailInputErrorMessage}
                        </div>
                    ) : null}
                </div>
                <div className="w-full sm:w-auto mt-4 sm:mt-0">
                    {props.joinWaitlistButton({
                        className: "w-full bg-primary-700 text-white font-bold border-2 border-primary-700 px-6 py-3 rounded"
                    })}
                </div>
            </div>
            {props.completeMessage ? (
                <div className="mt-4 font-bold text-xl">
                    {props.completeMessage}
                </div>
            ) : null}
        </div>
    )
}
