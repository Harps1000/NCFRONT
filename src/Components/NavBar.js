import React, { Component } from "react";
import { Link } from "@reach/router";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <Link className="link" to="/">
          All Articles
         
        </Link>
    
        <Link className="link" to="/topics/football">
          Football
          
        </Link>
        <Link className="link" to="/topics/coding">
          Coding
        
        </Link>
        <Link className="link" to="/topics/cooking">
          Cooking
       
        </Link>
      </nav>
    );
  }
}

export default NavBar;
