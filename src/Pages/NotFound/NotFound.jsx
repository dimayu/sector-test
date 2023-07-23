import './NotFound.scss';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="wrapper">
        <h1 className="not-found__title">Такой страницы не существует</h1>
        <Link to="/" className="btn">Перейти на главную</Link>
      </div>
    </div>
  );
};
