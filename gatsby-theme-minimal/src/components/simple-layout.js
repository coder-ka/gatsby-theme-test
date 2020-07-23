import React from 'react'

export default function SimpleLayout(props) {
    return (
        <div className="flex justify-center">
            <div className="max-w-screen-xl w-full">
                <div className="w-full bg-primary-700 flex">
                    <div className="my-4">
                        {props.logoWithAppName}
                    </div>
                    <div className="my-4">
                        {props.title}
                    </div>
                    <div className="my-4">
                        {props.subTitle}
                    </div>
                    <div className="my-4">
                        {props.emailForm}
                    </div>
                    <div className="my-4 flex">
                        <div className="max-w-screen-lg p-6">
                            {props.image}
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
