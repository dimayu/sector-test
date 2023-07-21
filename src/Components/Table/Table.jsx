import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TableHeader, TableRow, Loader } from '../index';
import { fetchPosts, fetchAllPosts } from '../../Redux/PostsSlice';

import './Table.scss';

export const Table = () => {
  const {status, error, page} = useSelector(state => state.posts);
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllPosts());
    dispatch(fetchPosts(page));
  }, [dispatch, page]);
  
  return (
    <div className="wrapper">
      {status === 'loading' && <Loader/>}
      {error && <h2 className="error">Error: {error}</h2>}
      {status === 'resolved'
        && <div className="table">
              <TableHeader/>
              {posts.map((post) => (
                <TableRow
                  key={post.id}
                  {...post}
                />
              ))}
            </div>
      }
    </div>
  );
};
