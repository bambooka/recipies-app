import React from "react"

export default function Header ({children, title, info}){
    return(
        <header>
            <div className="container-fluid">
                <div className="row align-items-center header-hero">
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
    info: "header-hero",
    title: "default title"
};