import React from 'react'
import RecipeList from './component/RecipesList'
import Search from './component/Search'
import {recipeData} from '../data/tempList'

export default class Recipes extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        recipes: recipeData,
        search: ""
    };

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <>
                <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <RecipeList recipes={this.state.recipes}/>
            </>
        )
    }
}
