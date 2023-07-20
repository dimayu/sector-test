import './Pagination.scss';

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <ul className="pagination my-5 d-flex justify-content-center">
      {pageNumbers.map(number => {
        if (currentPage === number) {
          return (
            <li key={number} className="page-item active">
              <button
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </button>
            </li>
          );
        }
        
        return (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
