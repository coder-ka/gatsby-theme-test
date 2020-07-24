import React from 'react'

export default function SimpleLayout(props) {
    return (
        <div className="flex justify-center">
            <div className="max-w-screen-xl w-full">
                <div className="w-full bg-primary-700 flex flex-col justify-center">
                    <div className="my-4 flex justify-center">
                        {props.logoWithAppName}
                    </div>
                    <div className="my-4 flex justify-center">
                        {props.title}
                    </div>
                    <div className="my-4 flex justify-center">
                        {props.subTitle}
                    </div>
                    <div className="my-4 flex justify-center">
                        <div className="flex">
                            <div className="mr-2">
                                {props.emailInput}
                            </div>
                            <div>
                                {props.submitButton}
                            </div>
                        </div>
                    </div>
                    <div className="my-4 relative h-32 sm:h-48 md:h-64">
                        <div className="absolute top-0 left-0 w-full flex justify-center">
                            <div className="max-w-screen-lg p-6 w-full">
                                {props.appImage}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="max-w-screen-lg flex justify-center pt-10 pb-4">
                        {props.appeal ? <div className="mb-4">{props.appeal}</div> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
