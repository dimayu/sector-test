import { useDispatch } from "react-redux";

import { getPage, decrement, increment } from '../../Redux/PostsSlice';
import './Pagination.scss';

export const Pagination = ({
  postsPerPage,
  totalPosts,
  currentPage,
}) => {
  const dispatch = useDispatch();
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div className="wrapper">
      <nav className="pagination">
        <button
          onClick={() => dispatch(decrement())}
          className="pagination__btn"
        >Назад</button>
        <ul className="pagination__list">
          {pageNumbers.map(number => {
            if (currentPage === number) {
              return (
                <li key={number} className="pagination__list__item">
                  <button
                    onClick={() => dispatch(decrement())}
                    className="pagination__list__item__link  pagination__list__item__link--active"
                  >
                    {number}
                  </button>
                </li>
              );
            }
        
            return (
              <li key={number} className="pagination__list__item">
                <button onClick={() => dispatch(getPage(number))} className="pagination__list__item__link">
                  {number}
                </button>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => dispatch(increment())}
          className="pagination__btn"
        >Далее</button>
      </nav>
    </div>
  );
};
