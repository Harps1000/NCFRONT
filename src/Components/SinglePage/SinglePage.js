import React, { Component } from "react";
import ErrorHandler from '../ErrorHandler';
import * as api from '../api';

class Article extends Component {
  state = {
    Article: null,
    err: null
  };

  render() {
    return (
      this.state.err ? <ErrorHandler err = {this.state.err}/> :

      this.state.Article ? (
        <div>
          <h2>{this.state.Article.title}</h2>
          <p>{this.state.Article.article.body}</p>
          <p>{this.state.Article.article.author}</p>
          </div>) : <h1>Coming Soon</h1>
    )
      }

  fetchArticle = ()=> api.getSingleArticle(this.props.article_id)
  .then(({ data }) => this.setState({ Article: data }))
  .catch((err)=>{this.setState({err: err})})

  componentDidMount() {
    this.fetchArticle()
  }
}

export default Article;
