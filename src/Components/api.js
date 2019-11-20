import Axios from "axios";

const request = Axios.create({
    baseURL: "https://harpreetgill.herokuapp.com/api"
})

export const fetchAllArticles = (sort_by, topic) => {
    return request.get('/articles', {params: {sort_by, topic}})
}

export const getSingleArticle = article_id => {
    return request(`/articles/${article_id}`);
  }

  export const fetchCommentsByArticle = article_id => {
    return request.get(`/articles/${article_id}/comments`);
  };
  