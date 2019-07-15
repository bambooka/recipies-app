import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Default from './pages/Default'
import Recipes from './pages/Recipes'
import SingleRecipe from './pages/SingleRecipe'

function App() {
    return (
        <div>
            <Home />
            <Recipes />
            <SingleRecipe />
            <Default/>

        </div>
    );
}

export default App;
