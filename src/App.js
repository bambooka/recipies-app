import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Default from './pages/Default'
import Recipes from './pages/Recipes'
import SingleRecipe from './pages/SingleRecipe'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
    return (

        <Router>
            <main>
                {/*navbar*/}
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/recipes" component={Recipes}/>
                    <Route path="/recipes/:id" component={SingleRecipe} />
                    <Route component={Default} />
                </Switch>
            </main>
        </Router>

    );
}

export default App;
