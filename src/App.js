import React, { Component } from "react";
import {Router} from "@reach/router"
import ArticlesList from "./Components/Homepage/ArticleList";
import ArticleCard from "./Components/Homepage/ArticleCard";
import NavBar from "./Components/NavBar"


class App extends Component {
state={}
render(){
  return (
    <div>
    <h1>NC News</h1>
    <NavBar/>
    <Router>
          <ArticlesList path="/"  />
          <ArticlesList path="/topics/:topic"  />
          <ArticleCard path="/:article_id" user={this.state.user} />
        </Router>


    </div>
  )
}

}

export default App;