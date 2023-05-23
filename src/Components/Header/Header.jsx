import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Navbar, Button, Nav, Collapse } from 'react-bootstrap';

import './Header.scss';

export const Header = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="d-flex align-items-center link-info">
            <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h1 className="h4 px-2 m-0">Mira soft</h1>
          </NavLink>
          <Button variant="outline-secondary navbar-toggler-icon p-2"
                  size="lg"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
          />
        </Container>
      </Navbar>
      <Collapse in={open} dimension="width">
        <Nav className="flex-column align-items-center text-bg-dark p-3" as="ul">
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
      </Collapse>
    </header>
  );
};