import React, { Component } from "react";
import {Router} from "@reach/router"
import ArticlesList from "./Components/Homepage/ArticleList"


class App extends Component {
state={}
render(){
  return (
    <div>
    <h1>NC News</h1>
    <ArticlesList/>
    </div>
  )
}

}

export default App;