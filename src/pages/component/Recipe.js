import React from 'react';
import {Link} from 'react-router-dom'
import '../../data/tempList'

export default class Recipe extends React.Component {

    render() {
        const {image_url, title, publisher, source_url, recipe_id} = this.props.recipe;
        return (
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card" style={{height: '100%'}}>
                    <img
                        src={image_url}
                        style={{height: '14rem'}}
                        className="img-card-top"
                        alt="recipe"
                    />
                    <div className="card-body text-capitalize">
                        <h6>{title}</h6>
                        <h6 className="text-warning text-slanted">
                            provided by {publisher}
                        </h6>
                    </div>
                    <div className="card-footer">
                        <Link to={`/recipe/${recipe_id}`} className="btn btn-primary text-capitalize">
                            details
                        </Link>
                        <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mx-2 text-capitalize">
                            recipe url
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}