import React, { Component } from "react";
import ErrorHandler from '../ErrorHandler';
import * as api from '../api';
import Comments from "./CommentList"
import VotesHandler from "../VotesHandler"
import { Link } from "@reach/router"

class Article extends Component {
  state = {
    Article: null,
    err: null
  };

  render() {

    return (
      <div>
         <Link className="link NavBar" to="/">
          <button><strong>Back to Home</strong></button>
        </Link>
      {this.state.err ? <ErrorHandler err = {this.state.err}/> :
      this.state.Article ? (
        <div>
          
          <h1 className="title">{this.state.Article.article.title}</h1>
          <p>Author: {" " + this.state.Article.article.author}</p>
          <VotesHandler class='votes-handler'
            votes={this.state.Article.article.votes}
            article_id={this.props.article_id}
            url="/articles/"
          /> 
          <p className = "body">{this.state.Article.article.body}</p>
          
          <Comments article_id={this.props.article_id} user={this.props.user} class='comments'/>
          </div>) : <h1>Coming Soon</h1>}
          </div>
   
     ) }

  fetchArticle = ()=> api.getSingleArticle(this.props.article_id)
  .then(({ data }) => this.setState({ Article: data }))
  .catch((err)=>{this.setState({err: err})})

  componentDidMount() {
    this.fetchArticle()
 
  }
}

export default Article;
