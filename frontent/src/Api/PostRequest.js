import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const getTimeLinePosts = (id) => API.get(`post/${id}/timeline`)

export const likePost = (id, userId) => {
  API.put(`post/${id}/like`, { userId: userId })
  console.log(userId);
}

export const deletePost = (id, userId) => {
  API.put(`post/${id}/dlte`, { userId: userId })
} 


export const createComment = (data) => {
  API.post(`post/comment`, data)
}

export const getComment = (comm) =>{
  API.get(`post/${comm}/comment`)
}