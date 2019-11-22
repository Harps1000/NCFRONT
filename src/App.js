import "./App.css";
import React, { Component } from "react";
import {Router} from "@reach/router"
import ArticlesList from "./Components/Homepage/ArticleList";
import Article from "./Components/SinglePage/SinglePage"


class App extends Component {
  state = { user: "jessjelly" };
render(){
  return (
    <div className="main-container" >
    
  
  
    <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/topics/:topic"   />
          <Article path="/:article_id" user={this.state.user}/>
        </Router>


    </div>
  )
}

}

export default App;