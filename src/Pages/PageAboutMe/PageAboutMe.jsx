import { Container, Card } from 'react-bootstrap';

import './PageAboutMe.scss';

export const PageAboutMe = () => {
  return (
    <Container>
      <h2 className="text-center my-3">Доброго времени суток! Меня зовут Дамир!</h2>
      <p>Мой путь в IT начался в 2018 году с создания сайтов на WP для себя и друзей, после прошел курс по верстке и
        стал работать на фрилансе с несколькими веб-студиями. Дальше не ограничился версткой, изучал frontend и
        влюбился в React. На данный момент увеличиваю свой багаж знаний и углубляюсь во frontend, пишу пет-проекты.</p>
      <p>Уверенно владею стандартным стеком (HTML, CSS, SCSS, JS, GULP, GIT). Есть опыт интеграции верстки на CMS WP и
        Joomla. Умею работать с графическими программами Adobe Photoshop, Figma.</p>
      <p>Хобби и интересы: увлекаюсь философией, литературой, новостями в сфере IT.</p>
      <p>Ценю в людях честность, открытость и справедливость.</p>
      <p>Заинтересован в проекте, где смогу развиваться и самостоятельно, и как командный игрок.</p>
      <p>Комфортный формат работы: удаленный.</p>
      <p>Готов выполнить тестовое задание.</p>
      <p>Мое портфолио: <Card.Link href="https://hi-inet.ru/">https://hi-inet.ru/</Card.Link></p>
      <p>Git: <Card.Link href="https://github.com/dimayu">https://github.com/dimayu</Card.Link></p>
      <p>Контакты: <Card.Link href="https://t.me/D_Sh82">https://t.me/D_Sh82</Card.Link></p>
      <p>Буду рад получить обратную связь!</p>
    </Container>
  )
    ;
};