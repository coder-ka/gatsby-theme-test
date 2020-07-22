import React from 'react'

export default function topBar({ brand, navigations, search, signInButton: signIn, signUpButton: signUp }) {
    return (
        <div className="flex px-10 py-4 bg-white">
            <div className="mr-auto">
                <div className="flex items-center">
                    {brand}
                </div>
            </div>
            <div className="mr-2">
                <div className="flex space-around">
                    {navigations}
                </div>
            </div>
            <div className="mr-2">
                {search}
            </div>
            <div className="mr-2">
                {signIn}
            </div>
            <div>
                {signUp}
            </div>
        </div>
    )
}
