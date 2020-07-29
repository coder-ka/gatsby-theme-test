import React from 'react'

export default function Layout(props) {
    return (
        <div className="w-screen h-screen overflow-auto">
            <div className="flex justify-center">
                <div className="max-w-screen-xl w-full">
                    <header className="w-full bg-primary-700 flex flex-col justify-center">
                        <div className="mt-8 mb-4 flex justify-center">
                            {props.logo}
                        </div>
                        <div className="my-4 flex justify-center text-center px-4">
                            <span className="text-white text-4xl md:text-6xl font-bold">
                                {props.title}
                            </span>
                        </div>
                        <div className="my-4 flex justify-center text-center px-4">
                            <span className="text-white text-xl sm:text-3xl">
                                {props.subTitle}
                            </span>
                        </div>
                        <div className="my-4 flex justify-center px-4">
                            <div className="flex flex-col sm:flex-row sm:justify-center w-full">
                                <div className="w-full sm:w-64 mb-2 sm:mb-0 sm:mr-4">
                                    {props.emailInput({ className: "w-full px-4 py-3 rounded" })}
                                </div>
                                <div className="w-full sm:w-auto">
                                    {props.submitButton({ className: "w-full bg-gray-900 text-white font-bold px-6 py-3 rounded" })}
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="max-w-screen-md w-full -mb-20 sm:-mb-48">
                                {props.appImage}
                            </div>
                        </div>
                    </header>
                    <main className="flex flex-col items-center mt-20 sm:mt-48">
                        <div className="flex flex-col items-center max-w-screen-md w-full">
                            {props.appeals ?
                                <div className="flex flex-col w-64 sm:w-auto sm:flex-row items-center sm:justify-center mt-4">
                                    {props.appeals}
                                </div> : null
                            }
                            <div className="mt-4 w-full">
                                {props.submitButton({ className: "w-full bg-primary-700 text-white font-bold px-6 py-3 rounded" })}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
