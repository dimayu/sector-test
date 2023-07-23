import { useSelector } from 'react-redux';

import { TableHeader, TableRow, Loader } from '../index';

import './Table.scss';

export const Table = ({ posts }) => {
  const {status, error} = useSelector(state => state.posts);
  
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
