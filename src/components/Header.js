import React from "react";
import {Link} from "react-router";
import './Css.css';

class Header extends React.Component{

  render(){
    return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                   <a className="navbar-brand" href="#"><Link to={"/movies"} activeClassName={"active"}>MOVIES</Link></a>
                </li>
                <li className="nav-item">
                   <a className="navbar-brand" href="#"><Link to={"/tvshows"} activeClassName={"active"}>TV SHOWS</Link></a>
                </li>    
            </ul>
          </div>
        </nav>
    );
  }
}

export default Header;