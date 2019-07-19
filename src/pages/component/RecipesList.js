import React from 'react';
import Recipe from './Recipe'
import '../../data/tempList'

export default class RecipesList extends React.Component {
    render() {
        const recipes = this.props.recipes.map(recipe =>
            <Recipe key={recipe.recipe_id} recipe={recipe}/>
        );
        return (

            <>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted">recipe list</h1>
                        </div>
                    </div>
                    <div className="row">{recipes}</div>
                </div>
            </>
        )
    }
}