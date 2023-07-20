import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const getPosts = async () => {
  const res = await axios.get(`posts`);
  return await res;
};
