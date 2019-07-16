import React from "react"
import Logo from "../../images/logo.png"
import {Link} from "react-router-dom"

export default class Navbar extends React.Component {
    render(){
        return(
            <navbar className="navbar navbar-expand-sm navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="logo" />
                </Link>
                <div className="collaps navbar-collapse show ml-sm-5">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="nav-link" to="/recipes">Recipes</Link>
                        </li>
                    </ul>
                </div>
            </navbar>
        )
    }
}