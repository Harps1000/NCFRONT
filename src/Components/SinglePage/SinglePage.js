import React, { Component } from "react";
import ErrorHandler from '../ErrorHandler';
import * as api from '../api';
import Comments from "./CommentList"

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
          <Comments article_id={this.props.article_id} user={this.props.user} class='comments'/>
          </div>) : <h1>Coming Soon</h1>
    

   
   
     ) }

  fetchArticle = ()=> api.getSingleArticle(this.props.article_id)
  .then(({ data }) => this.setState({ Article: data }))
  .catch((err)=>{this.setState({err: err})})

  componentDidMount() {
    this.fetchArticle()
  }
}

export default Article;
