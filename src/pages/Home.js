import React from 'react'
import Header from "./component/Header"
import {Link} from "react-router-dom"

export default class Home extends React.Component{
    render(){
        return (
            <Header title="Amazing recipes">
                <Link to="/recipes" className="text-uppercase btn btn-secondary btn-lg mt-5">
                    search recipes
                </Link>
            </Header>
        )
    }
}
