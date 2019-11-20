import React from "react";

const CommentCard = ({comments, removeComment, user}) => {
  return (
    <ul className='comments'>
    <h4 id="comments-heading">Comments:</h4> <br/>
      {comments.map(comment => {
        return (
          <li key={comment.comment_id}>
            
              
              <p>{comment.body} </p>
            
            
            <p>Author: {comment.author} </p>
           

          </li>
        );
      })}
    </ul>
  );
};

export default CommentCard;