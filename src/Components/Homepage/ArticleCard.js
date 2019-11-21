import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({articles}) => {
    console.log(articles)
    return ( 
        <ul className="homepage-list">
          {articles.map(article => { 
            return ( 
              <li>   
                <Link to={`/${article.article_id}`}>
                  <h3 className='article-name'>{article.title} </h3>
                </Link>
                <div className='article-description'>
               <div > <p>Topic: {article.topic} </p>
                <p>Author: {article.author} </p></div>
               <div > <p>Votes: {article.votes} </p>
                <p>Date: {article.created_at.slice(0, 10)}</p> </div>
                </div>
              </li>
            );
          })}
        </ul>
      );
    };

export default ArticleCard