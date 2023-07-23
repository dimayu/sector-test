import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { fetchPosts } from '../Redux/PostsSlice';
import { Pagination, Search, Table } from '../Components';

export const Posts = () => {
  const {id} = useParams();
  const [value, setValue] = useState('');
  const posts = useSelector(state => state.posts.posts);
  const byTitle = useSelector(state => state.posts.byTitle);
  const byId = useSelector(state => state.posts.byId);
  const byDesc = useSelector(state => state.posts.byDesc);
  const {limitPost} = useSelector(state => state.posts);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  
  const filteredPosts = posts.filter(item => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });
  
  const indexOfLastPost = +id * limitPost;
  const indexOfFirstPost = indexOfLastPost - limitPost;
  let currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  if (byTitle) {
    currentPosts
    .sort((a, b) => a.title.localeCompare(b.title));
  }

  if (byId) {
    currentPosts
    .sort((a, b) => a.id - b.id);
  }

  if (byDesc) {
    currentPosts
    .sort((a, b) => a.body.localeCompare(b.body));
  }
  
  const searchHandler = (value) => setValue(value);
  
  return (
    (id > limitPost)
      ? <>
        <h2 className="error">Не существует такой страницы</h2>
        <Link to="/posts/1" className="btn">Перейти на страницу постов</Link>
      </>
      : <div className="page-home">
        <Search value={searchHandler}/>
        <Table posts={currentPosts}/>
        <Pagination
          totalPosts={filteredPosts.length}
          currentPage={+id}
          postsPerPage={10}
        />
      </div>
  );
};
