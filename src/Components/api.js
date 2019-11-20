import Axios from "axios";

const request = Axios.create({
    baseURL: "https://harpreetgill.herokuapp.com/api"
})

export const fetchAllArticles = (sort_by, topic) => {
    return request.get('/articles', {params: {sort_by, topic}})
}