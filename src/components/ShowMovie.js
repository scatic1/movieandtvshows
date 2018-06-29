import React, { Component } from 'react';
import './Css.css';
import axios from 'axios';
import { Link } from 'react-router';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
const API = "https://api.themoviedb.org/3/movie/top_rated?api_key=6c23e744b19e2d28334b86079f135707&language=en-US&page=1";

class ShowMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: {original_title:""}
    };
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/'+this.props.params.id+'?api_key=6c23e744b19e2d28334b86079f135707&language=en-US&page=1')
      .then(res => {
        this.setState({ result: res.data });
        console.log(this.state.result);
      });
  }

  render(){
       return (
            <div className="row">
                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                       <div className="card bg-light">
                          <div className="card-body">
                 
                             <h4><Link to={`/movies`}><span className="glyphicon glyphicon-menu-left"aria-hidden="true"></span></Link></h4>
                        
                          <div className="panel-body">
                              <div className="col-md-6 col-xs-12 ">
                                    <img className="img-fluid center" src={`https://image.tmdb.org/t/p/w500/${this.state.result.backdrop_path}`}  />
                              </div>
                          <div className="col-md-6 col-xs-12">
                              <div className="row">
                                   <div className="col-md-8  col-xs-12">
                                      <h3 className="card-title"><label for="name">{this.state.result.original_title}</label></h3>
                                    </div>
                                   <div className="col-md-4  col-xs-12"><h3 className="card-title-right">
                                      <span className="fa fa-star checked"></span>{this.state.result.vote_average}</h3>
                                    </div>
                              </div>
                          
                           <h3 className="card-text">{this.state.result.overview}</h3>

                           </div>
                     </div>
                    </div>
                 </div>
               </div>               
      );
    }
  }

export default ShowMovie;