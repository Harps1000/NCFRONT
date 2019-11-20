import React, { Component } from "react";
import {Router} from "@reach/router"
import ArticlesList from "./Components/Homepage/ArticleList";
import Article from "./Components/SinglePage/SinglePage"
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
          <Article path="/:article_id" user={this.state.user} />
        </Router>


    </div>
  )
}

}

export default App;