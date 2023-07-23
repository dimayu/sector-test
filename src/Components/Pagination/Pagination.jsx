import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { getPage, decrement, increment } from '../../Redux/PostsSlice';

import './Pagination.scss';

export const Pagination = ({
  postsPerPage,
  totalPosts,
  currentPage,
}) => {
  const dispatch = useDispatch();
  const {page} = useSelector(state => state.posts);
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div className="wrapper">
      <nav className="pagination">
        <Link
          onClick={() => dispatch(decrement())}
          to={`/posts/${page}`}
          className="pagination__btn"
        >Назад</Link>
        <ul className="pagination__list">
          {pageNumbers.map(number => {
            if (currentPage === number) {
              return (
                <li key={number} className="pagination__list__item">
                  <Link to={`/posts/${number}`}
                        onClick={() => dispatch(getPage(number))}
                        className="pagination__list__item__link  pagination__list__item__link--active"
                  >
                    {number}
                  </Link>
                </li>
              );
            }
            
            return (
              <li key={number} className="pagination__list__item">
                <Link to={`/posts/${number}`}
                      onClick={() => dispatch(getPage(number))}
                      className="pagination__list__item__link"
                >
                  {number}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          onClick={() => dispatch(increment())}
          to={`/posts/${page}`}
          className="pagination__btn"
        >Далее</Link>
      </nav>
    </div>
  );
};
