import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Navbar, Button } from 'react-bootstrap';

import { Menu } from '../../Components/index';

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
            <h1 className="h4 px-2 m-0">Mitra soft</h1>
          </NavLink>
          <Button variant="outline-secondary navbar-toggler-icon p-2"
                  size="lg"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
          />
        </Container>
      </Navbar>
      <Menu open={open}/>
    </header>
  );
};