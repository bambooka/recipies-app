import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Default from './pages/Default'
import Recipes from './pages/Recipes'
import SingleRecipe from './pages/SingleRecipe'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./pages/component/Navbar"
function App() {
    return (

        <Router>
            <main>
                <Navbar />
                {/*navbar*/}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/recipes" component={Recipes}/>
                    <Route path="/recipe/:id" component={SingleRecipe} />
                    <Route component={Default} />
                </Switch>
            </main>
        </Router>

    );
}

export default App;
