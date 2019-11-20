import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard"


class Comments extends Component {
  state = { comments: null };
  
  render() {
    
    return (
      <>
        
    
        
        {this.state.comments &&  <CommentCard
            
            comments={this.state.comments}
              user={this.props.user}
          />}

        
      </>
    );
  }
  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    api.fetchCommentsByArticle(this.props.article_id).then(({ data }) => {
      this.setState({ comments: data.comments });
    });
  };

 
}

export default Comments;
