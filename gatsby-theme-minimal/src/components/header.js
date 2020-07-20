import React from 'react'

export default function header({ stickyBar }) {
    return (
        <div className="relative">
            <div className="w-full sticky top-0 left-0">
                {stickyBar}
                <TopBar></TopBar>
            </div>
            <div className="absolute">
                {background}
                <HeroImage></HeroImage>
            </div>
            <div className="absolute">
                {foreground}
                
                <div className="flex px-10 py-8">
                    <div className="mr-auto">
                        <div>
                            {title}
                            <Header size="huge"></Header>
                        </div>
                        <div>
                            {subtitle}
                            <Header size="large"></Header>
                        </div>
                        <div className="flex">
                            <Button theme="primary" basic></Button>
                            <Button theme="primary" basic></Button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
