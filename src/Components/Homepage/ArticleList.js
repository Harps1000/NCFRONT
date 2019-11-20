import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api"
import ErrorHandler from "../ErrorHandler"; 

class ArticlesList extends Component {
    state = { Articles: null, sortBy: "created_at", err: null}
    render(){
        return(
            <div>
<h2>List of Articles</h2>

{this.state.err ? (
          <ErrorHandler err={this.state.err} />
        ) : this.state.Articles ? (
          <ArticleCard articles={this.state.Articles} />
        ) : (
          <h1>'Articles coming soon!' </h1>
        )}
            </div>     
        )
    }
fetchArticles = (sort, topic) => {
    return api.fetchAllArticles(sort, topic).then(({data})=>{
        this.setState({ Articles: data.articles, err: null})
    })
}

componentDidMount() {
    this.fetchArticles(this.state.sortBy, this.props.topic).catch(err => {
      this.setState({ err: err });
    });
  }

}

export default ArticlesList