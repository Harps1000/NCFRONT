import "./App.css";
import React, { Component } from "react";
import {Router} from "@reach/router"
import ArticlesList from "./Components/Homepage/ArticleList";
import Article from "./Components/SinglePage/SinglePage"
import NavBar from "./Components/NavBar"
import Header from "./Components/Homepage/Header"


class App extends Component {
  state = { user: "jessjelly" };
render(){
  return (
    <div className="main-container" >
    <Header className="main-head--mainitem"/>
    <p className="user--mainitem">logged in as: jessjelly</p>
    <NavBar className="NavBar--mainitem"/>
    <Router>
          <ArticlesList path="/"  className="home--mainitem" />
          <ArticlesList path="/topics/:topic"  className="home--mainitem"  />
          <Article path="/:article_id" user={this.state.user} className='article-page--mainitem' />
        </Router>


    </div>
  )
}

}

export default App;