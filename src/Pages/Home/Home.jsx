import { Link } from 'react-router-dom';

import './Home.scss';

export const Home = () => {
  return (
    <div className="page-home">
      <div className="wrapper">
        <h1 className="page-home__title">Тестовое задание</h1>
        <p>Доброго времени суток, дорогой проверяющий!</p>
        <p>Надеюсь у меня все сложиться)</p>
        <Link to="/posts/1" className="btn">Перейти на страницу постов</Link>
      </div>
    </div>
  );
};
