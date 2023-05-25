import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Row, Spinner } from 'react-bootstrap';
import { getPosts } from '../../Redux/Actions/ActionCreator';
import { Post, Pagination, Search, Sort } from '../index';

import './Posts.scss';

export const Posts = () => {
  const posts = useSelector(store => store?.posts?.posts);
  const loaded = useSelector(store => store?.posts?.loaded);
  const dispatch = useDispatch();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [value, setValue] = useState('');
  const [sort, setSort] = useState(false);
  
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  if (sort) {
    posts.sort(function (a, b) {
      const titleFirst = a.title.toLowerCase();
      const titleNext = b.title.toLowerCase();
      if (titleFirst < titleNext)
        return -1;
      if (titleFirst > titleNext)
        return 1;
      return 0;
    });
  } else {
    posts.sort(function (a, b) {
      const titleFirst = a.title.toLowerCase();
      const titleNext = b.title.toLowerCase();
      if (titleFirst < titleNext)
        return 1;
      if (titleFirst > titleNext)
        return -1;
      return 0;
    });
  }
  
  const filteredPosts = posts.filter(item => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  const searchHandler = (value) => setValue(value);
  const sortHandler = (value) => setSort(value);
  
  return (
    <>
      <div className="d-flex justify-content-between align-items-end">
        <Search value={searchHandler}/>
        <Sort value={sortHandler}/>
      </div>
      <Row className="posts my-4 mx-0">
        {
          loaded ? currentPosts.map((item, index) => (
            <Post post={item} key={index}/>
          )) : <Spinner animation="border" role="status" className="mx-auto" size="xl">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
      </Row>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredPosts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};