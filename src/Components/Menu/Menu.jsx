import { NavLink } from 'react-router-dom';

import { Nav } from 'react-bootstrap';

import './Menu.scss';

export const Menu = ({ open }) => {
  
  return (
    <Nav className={open ? `flex-column align-items-center text-bg-dark p-3` : `nav--close`} as="ul">
      <Nav.Item as="li" className="p-2">
        <img src="/img/user.png" alt="user" width="150px" height="150px"/>
        <p className="text-center pt-2 m-0">Дамир</p>
        <a href="mailto:dimayu82@gmail.com" className="link-info">dimayu82@gmail.com</a>
      </Nav.Item>
      <Nav.Item as="li" className="p-2">
        <NavLink to="/" className="link-info">Список постов</NavLink>
      </Nav.Item>
      <Nav.Item as="li" className="p-2">
        <NavLink to="/about" className="link-info">Обо мне</NavLink>
      </Nav.Item>
    </Nav>
  );
};