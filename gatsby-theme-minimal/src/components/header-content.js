import React from 'react'

export default function HeaderContent({ title, subtitle, signUp, demo, appImage }) {
    return (
        <div className="flex px-10 py-8">
            <div className="mr-auto">
                <div>
                    {title}
                </div>
                <div>
                    {subtitle}
                </div>
                <div className="flex">
                    <div className="mr-2">
                        {signUp}
                    </div>
                    <div>
                        {demo}
                    </div>
                </div>
            </div>
            <div>
                {appImage}
            </div>
        </div>
    )
}
