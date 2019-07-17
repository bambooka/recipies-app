import React from 'react';
import Recipe from './Recipe'

export default class RecipesList extends React.Component {
    render() {
        return (
            <>
                <h1>hello from recipe list</h1>
                <Recipe/>
            </>
        )
    }
}