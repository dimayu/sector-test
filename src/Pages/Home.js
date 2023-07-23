import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="page-home">
      <div className="wrapper">
        <Link to="/posts/1" className="btn">Перейти на страницу постов</Link>
      </div>
    </div>
  );
};
