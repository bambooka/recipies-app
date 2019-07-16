import React from "react"

export default function Header ({title, slyleClass, children}){
    return(
        <header>
            <div className="container-fluid">
                <div className='header-hero text-light align-items-center text-uppercase display-3 letter-spacing'>
                    <div className="col text-center">
                        <h1 className="text-light text-uppercase display-3 letter-spacing text-slanted">
                            {title}
                        </h1>
                        {children}
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: "default title",
    styleClass: "header-hero"
};