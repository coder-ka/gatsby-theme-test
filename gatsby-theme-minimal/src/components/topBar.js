import React from 'react'

export default function topBar({ brand, navigations, search, signInButton, signUpButton }) {
    return (
        <div className="flex px-4 py-2">
            <div className="mr-auto">
                <div className="flex items-center">
                    {brand}
                    <Image url={logoUrl}></Image>
                </div>
            </div>
            <div className="mr-2">
                <div className="flex space-around">
                    {navigations}
                    {navigations.map(nav => <Button theme="muted" basic>
                        {nav.title}
                    </Button>)}
                </div>
            </div>
            <div className="mr-2">
                {search}
                <IconHidingInput></IconHidingInput>
            </div>
            <div className="mr-2">
                {signInButton}
                <Button theme="secondary" basic size="small"></Button>
            </div>
            <div>
                {signUpButton}
                <Button theme="secondary" basic size="small"></Button>
            </div>
        </div>
    )
}
