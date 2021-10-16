import axios from 'axios';

const url = 'http://localhost:8000/users';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/update/${id}`, updatedPost);
export const updateStyle = (id, updatedStyle) => axios.patch(`${url}/template/${id}`, updatedStyle);
export const deletePost = (id) => axios.delete(`${url}/${id}`);