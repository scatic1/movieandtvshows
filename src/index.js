import React from "react";
import ReactDOM from 'react-dom';
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import { Link } from 'react-router';
import './components/Css.css';
import {Root} from "./components/Root";
import {Home} from "./components/Home";


import Movies from './components/Movies'
import TvShows from './components/TvShows'
import ShowMovie from './components/ShowMovie'
import ShowTvShow from './components/ShowTvShow'
import registerServiceWorker from './registerServiceWorker';


class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root} >
                    <IndexRoute component={Home} />
                   
                    <Route path={"home"} component={Home} />
                    <Route path={"movies"} component={Movies} />
                    <Route path={"tvshows"} component={TvShows} />
                     <Route path='/showmovie/:id' component={ShowMovie} />
                      <Route path='/ShowTvShow/:id' component={ShowTvShow} />
                    
                </Route>

                <Route path={"home-single"} component={Home}/>
            </Router>
        );
    }
}

render(<App />, window.document.getElementById('root'));
