import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api"
import ErrorHandler from "../ErrorHandler"; 
import SortForm from "./SortForm"

class ArticlesList extends Component {
    state = { Articles: null, sortBy: "created_at", err: null}
    render(){
        return(
            <div>
<h3>Sort By:</h3>   
        <SortForm
          handleSubmit={this.handleSortSubmit}
          default={this.state.sortBy}
        />

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

    handleSortSubmit = (e, value) => {
        e.preventDefault();
        this.setState({ sortBy: value });
      };



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

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.sortBy !== prevState.sortBy ||
      this.props.topic !== prevProps.topic
    ) {
      this.fetchArticles(this.state.sortBy, this.props.topic).catch(err => {
        this.setState({ err: err });
      });
    }
  }

}

export default ArticlesList