import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const getPosts = async () => {
  const res = await axios.get(`posts`);
  return await res;
};

export const getComments = async () => {
  const res = await axios.get(`comments`);
  return await res;
};

export const getUser = async (id) => {
  const res = await axios.get(`users/${id}`);
  return await res;
};