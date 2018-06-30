import React, { Component } from 'react';
import './Css.css';
import axios from 'axios';
import { Link } from 'react-router';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
const API = "https://api.themoviedb.org/3/movie/top_rated?api_key=6c23e744b19e2d28334b86079f135707&language=en-US&page=1";

function searchingFor(term){
  return function(x){
    if(term.length>2){
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;}
    else{return x.title.toLowerCase();}
  }
}
class Movies extends Component {

constructor(props) {
    super(props);

    this.state = {
      results: [],
      isLoading: false,
      error: null,
      term:'',
    }
    this.searchHandler=this.searchHandler.bind(this);
  }
searchHandler(event){
this.setState({term:event.target.value})
}
  componentDidMount() {
     this.setState({ isLoading: true });
      
    fetch(API )
       .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
       .then(data => this.setState({ results: data.results, isLoading: false }))
       .catch(error => this.setState({ error, isLoading: false }));
  }
  
render() {
   const { term,results, isLoading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p></p>;
    }
    return (

           <div>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                   <div className="main">
                     <div className="input-group">
                     <input type="text" className="form-control" placeholder="Search" onChange={this.searchHandler} value={term} />
                        <div className="input-group-append">
                           <button className="btn btn-secondary" type="button">
                           <i className="fa fa-search"></i>
                          </button>
                       </div>
                      </div>
                    </div>

                   <div className="card-group">
     
                       {
                           results.filter(searchingFor(term)).map(result=>
                              <div key={result.id}>
                                  <div className="card bg-light text-white pt-2">
                                    <div className="card-body">
                                       <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`}  />
                                       <h3 className="card-title-center pt-2"><Link to={`/showMovie/${result.id}`} >{result.title}</Link></h3>
                              
                                    </div>
                                  </div> 
                             </div>
                          )
                      }
                   </div>
          </div>
        
          );                 
       }
}

export default Movies;